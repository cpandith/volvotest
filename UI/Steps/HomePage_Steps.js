import { Given, When, Then } from 'cucumber';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import HomePage from '../PageObjects/HomePage.js';


Given(/^I Naviate to Home Page$/, function () {
    browser.url(Constants.BaseURL);
});

When(/^I Accept Cookies$/, function () {
    HomePage.acceptCookies();
});

Then(/^I Verify Safety Features are Listed$/, function () {
    expect(HomePage.speedCapIconDisplayed()).to.equal(true);
    expect(HomePage.driverMonitoringCamIconDisplayed()).to.equal(true);
    expect(HomePage.careKeyIconDisplayed()).to.equal(true);
    expect(HomePage.highwayPilotIconDisplayed()).to.equal(true);
});

Then(/^I Click Know More About Car Safety Hyperlink$/, function () {
    HomePage.clickMoreAboutCarSafetyHyperlink();
});

Then(/^I Verify One of a Million Videos are Visible$/, function () {
    expect(HomePage.videoAmyDisplayed()).to.equal(true);
    expect(HomePage.videoSumerDisplayed()).to.equal(true);
    expect(HomePage.videoLindaDisplayed()).to.equal(true);
    expect(HomePage.videoAlexDisplayed()).to.equal(true);
});

Then(/^I Click Learn More on Decades of innovation Section$/, function () {
    HomePage.clickLearnMoreButton();
});
