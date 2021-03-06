---
layout: page.html
---

<div class="row">
  <div class="col-xs-12">
    <div class="box">
      <div class="login-page">
        <div id="login-box" class="login-box auth0-box before">
          <h3>Login with GitHub to post a job</h3>
          <a id="ge-btn-login" class="btn btn-primary btn-lg btn-block">Log in</a>
        </div>
        <div id="logged-in-box" class="logged-in-box auth0-box logged-in" style="display: none;">
          Welcome
          <span id="nick"></span>!
        </div>
        <h3>Looking for talent?</h3>
        <form id="jobsForm" class="form-horizontal">
          <div class="form-group">
            <label for="title" class="control-label">Job Title</label>
            <div class="col-sm-10">
              <input type="text" name="title" class="form-control" placeholder="JavaScript Ninja">
            </div>
          </div>
          <div class="form-group">
            <label for="companyName" class="control-label">Company Name</label>
            <div class="col-sm-10">
              <input type="text" name="companyName" class="form-control" placeholder="YourCompany">
            </div>
          </div>
          <div class="form-group">
            <label for="companyTwitter" class="control-label">Company Twitter handle</label>
            <div class="col-sm-10">
              <input type="text" name="companyTwitter" class="form-control" placeholder="@YourCompany">
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="control-label">Email</label>
            <div class="col-sm-10">
              <input type="email" name="email" class="form-control" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="url" class="control-label">Company URL</label>
            <div class="col-sm-10">
              <input type="text" name="url" class="form-control" placeholder="https://barcelonajs.org">
            </div>
          </div>
          <div class="form-group">
            <label for="description" class="control-label">Description</label>
            <textarea rows="10" name="description" placeholder="What makes this job so special?"></textarea>
          </div>
          <div class="form-group">
            <label for="skillsAndRequirements" class="control-label">Skills & Requirements</label>
            <textarea rows="10" name="skillsAndRequirements" placeholder="What makes this job so special?"></textarea>
          </div>
          <div class="form-group">
            <label for="about" class="control-label">About the Company (optional)</label>
            <textarea rows="10" name="about" placeholder="What makes your company so special?"></textarea>
          </div>
          <div class="-row _residence">
            <div class="-col12">
              <label class="_medium">Remote &amp; Relocation</label>
            </div>
            <p>We're not a regular job board and only promote local job offers from and in Barcelona or remote jobs. If you want to hire for London, Berlin or anywhere else, go to <a href="http://jobfluent.com">JobFluent</a>.</p>
            <div class="-col6 checkbox">
              <input name="allowsRemote" type="checkbox" value="true">
              <input name="allowsRemote" type="hidden" value="false">
              <label class="icon _remote" for="allowsRemote" title="Check this only if you are considering candidates who will work entirely remotely">
                <strong>Work Remotely</strong>Working remotely full-time is an option.</label>
            </div>
            <div class="-col6 residence checkbox">
              <input name="offersRelocation" type="checkbox" value="true">
              <input name="offersRelocation" type="hidden" value="false">
              <label class="icon _relocate" for="offersRelocation">
                <strong>Offer Relocation to Barcelona</strong>Relocation assistance to Barcelona is offered.</label>
            </div>
          </div>
          <div class="inputGroup">
            <label class="_medium">Joel Test</label>
            <p class="text _help">The <a href="http://www.joelonsoftware.com/articles/fog0000000043.html">Joel Test</a> is a twelve-question measure of the quality of a software team.</p>
            <div class="checkbox">
              <input name="SuppressJoelTest" style="display:none" type="checkbox" value="true">
              <input name="SuppressJoelTest" type="hidden" value="false">
              <input checked="checked" name="ShowJoelTest" type="checkbox" value="true">
              <input name="ShowJoelTest" type="hidden" value="false">
              <label for="ShowJoelTest">Show the Joel Test for this job ad</label>
            </div>
            <div style="margin-left: 1.4em;" class="-joelInputs">
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="1">
                <label for="JoelTest1">Do you use source control?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="2">
                <label for="JoelTest2">Can you make a build in one step?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="3">
                <label for="JoelTest3">Do you make daily builds?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="4">
                <label for="JoelTest4">Do you have a bug database?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="5">
                <label for="JoelTest5">Do you fix bugs before writing new code?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="6">
                <label for="JoelTest6">Do you have an up-to-date schedule?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="7">
                <label for="JoelTest7">Do you have a spec?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="8">
                <label for="JoelTest8">Do programmers have quiet working conditions?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="9">
                <label for="JoelTest9">Do you use the best tools money can buy?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="10">
                <label for="JoelTest10">Do you have testers?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="11">
                <label for="JoelTest11">Do new candidates write code during their interview?</label>
              </div>
              <div class="checkbox">
                <input name="JoelTests" type="checkbox" value="12">
                <label for="JoelTest12">Do you do hallway usability testing?</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-4">
              <ul class="jobs-category-free">
                <li>Job listing on barcelonajs.org</li>
                <li>Job listing in the GitHub Repository</li>
                <li>1-Minute pitch slot at BarcelonaJS meetups</li>
              </ul>
              <button type="button" id="jobs-submit-free" class="btn btn-default">Post Free Job</button>
            </div>
            <div class="col-xs-4">
              <ul class="jobs-category-free">
                <li>Job listing on barcelonajs.org</li>
                <li>Job listing in the GitHub Repository</li>
                <li>1-Minute pitch slot at BarcelonaJS meetups</li>
              </ul>
              <ul class="jobs-category-premium">
                <li>Starred job listing
                  <p>stays at the top of the list for 2 weeks</p>
                </li>
                <li>2 mentions on Twitter <a href="https://twitter.com/BcnJS">@BcnJS</a></li>
                <li>Job listing in our monthly newsletter</li>
              </ul>
              CIF/EU-VAT-ID:
              <input type="text" name="billingVat" placeholder="CIF">
              <br />
              <button type="button" id="jobs-submit-premium" class="btn btn-default">Post Premium Job for 49&euro;</button>
            </div>
            <div class="col-xs-4">
              <ul class="jobs-category-free">
                <li>Job listing on barcelonajs.org</li>
                <li>Job listing in the GitHub Repository</li>
                <li>1-Minute pitch slot at BarcelonaJS meetups</li>
              </ul>
              <ul class="jobs-category-premium">
                <li>Starred job listing
                  <p>stays at the top of the list for 2 weeks</p>
                </li>
                <li>4 mentions on Twitter <a href="https://twitter.com/BcnJS">@BcnJS</a></li>
                <li>Job listing in our monthly newsletter</li>
              </ul>
              <ul class="jobs-category-platinum">
                <li>Job listing with company logo</li>
                <li>4 extra mentions (= 8 total) on Twitter <a href="https://twitter.com/BcnJS">@BcnJS</a></li>
                <li>2 extra weeks as a top listing (= 4 weeks total)</li>
                <li>1 extra minute for the company pitch at BarcelonaJS meetups</li>
              </ul>
              CIF/EU-VAT-ID:
              <input type="text" name="billingVat" placeholder="CIF">
              <br />
              <button type="button" id="jobs-submit-platinum" class="btn btn-default">Post Platinum Job for 99&euro;</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
