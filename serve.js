var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');
var browserSync = require('metalsmith-browser-sync');
var metadata = require('metalsmith-metadata');
var moment = require('moment');
var sass = require('metalsmith-sass');

/**
 * Normalize an `options` dictionary.
 *
 * @param {Object} options
 */

function normalize(options) {
  options = options || {};

  for (var key in options) {
    var val = options[key];
    if ('string' === typeof val) {
      options[key] = {
        pattern: val
      };
    }
  }
  return options;
}

var test = function test() {
  return function (files, metalsmith, done) {
    //console.log(metalsmith.metadata());
    //Object.keys(files).forEach(function(f) {
      //console.log(files[f].collection);
    //})
    done();
  }
}
var bcnjs = function bcnjs(opts) {
  opts = normalize(opts);

  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata();
    var tmpEvent;
    var nextEvent;

    //var newFiles = [];
    //Object.keys(files).forEach( function(file) {
      //if (file.match(/^data\/(?:talks|events)/)) {
        //var oldContent = files[file];
        //delete files[file];
        //file.replace(/^data/,'');
        //newFiles.push({ key: file, content: oldContent });
      //}
    //});


    //console.log(newFiles);
    //newFiles.forEach( function(file) { files[file.key] = file.content });

    // Add the page Layout to all talks
    for (var i = 0; i < metadata.talks.length; i++) {
      metadata.talks[i].layout = 'page.html';
    }

    for (var i = 0; i < metadata.events.length; i++) {
      var content = JSON.parse(metadata.events[i].contents.toString('utf-8'));
      var date = moment(content.startDate, 'YYYYMMDDTHHmm').add(1, 'minutes').unix();
      if (date >= moment().unix()) {
        tmpEvent = i;
      }
    }

    var nextEvent = null;
    if (metadata.events[tmpEvent]) {
      nextEvent = JSON.parse(metadata.events[tmpEvent].contents);
      nextEvent.startDate = moment.utc(nextEvent.startDate, 'YYYYMMDDTHHmm').format('MMMM DD, HH:mm');
    }

    if (nextEvent) {
      nextEvent.talks = [];

      if (nextEvent.performer) {
        for (var j = 0; j < nextEvent.performer.length; j++) {
          var talk = files['data/talks/' + nextEvent.performer[j].id + '.md'];
          if (talk && talk.name) {
            nextEvent.talks.push(talk);
          }
        }
      }

      if (nextEvent.talks <= 2) {
        for (var k = nextEvent.talks.length; k < 2; k++) {
          nextEvent.talks.push({});
        }
      }

    } else {
      nextEvent = {
        'context': 'http://schema.org',
        'organizer': {
          'type': 'Organization',
          'address': {
            'type': 'PostalAddress',
            'addressLocality': 'Barcelona, Spain',
            'postalCode': '08003',
            'streetAddress': 'C/ Mare de Deu del Pilar 20'
          },
          'email': 'hola(at)barcelonajs.org',
          'name': 'BarcelonaJS',
          'url': 'http://barcelonajs.org'
        },
        'performer': [],
        'layout': 'page.html'
      };
    }

    metalsmith._metadata.nextEvent = nextEvent;
    done();
  };
};

Metalsmith(__dirname)
  .source('src/')
  .destination('./build')
  .use(metadata({
    'chapters': 'data/chapters.json',
    'sponsors': 'data/sponsors.json',
    'members': 'data/members.json'
  }))
  .use(collections({
    talks: {
      pattern: 'data/talks/*.md',
      sortBy: 'startDate',
      reverse: true,
      limit: 1
    }
  }))
  .use(collections({
    events: {
      pattern: 'data/events/*.json',
      sortBy: 'startDate',
      reverse: true
    }
  }))
  .use(bcnjs())
  .use(markdown())
  //.use(test())
  .use(layouts({
    engine: 'handlebars',
    directory: 'src/layouts',
    partials: 'src/partials'
  }))
  .use(sass({
    outputStyle: 'expanded',
    outputDir: 'assets/css/'
  }))
  .use(test())
  //.use(permalinks({
    //relative: false,
    //pattern: ':collection/:id'
  //}))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(browserSync({
    server: './build',
    files: ['src/**/*.*']
  }))
  .build(function (error) {
    if (error) {
      console.log(error);
    }
  });
