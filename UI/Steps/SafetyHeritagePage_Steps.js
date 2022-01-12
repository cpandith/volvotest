import { Then } from 'cucumber';
import { expect } from 'chai';
import SafetyHeritagePage from '../PageObjects/SafetyHeritagePage.js';


Then(/^I Verify that I am Navigated to Safety Heritage Page$/, function () {
    SafetyHeritagePage.introSection.waitForDisplayed({ timeout: 6000 });
    let pageTitle = browser.getTitle();
    expect(pageTitle).to.equal("Safety innovations | Volvo Cars");
});