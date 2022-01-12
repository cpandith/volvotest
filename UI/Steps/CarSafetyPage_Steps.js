import {Then } from 'cucumber';
import { expect } from 'chai';
import CarSafetyPage from '../PageObjects/CarSafetyPage.js';


Then(/^I Verify that I am navigated to Car Safety Page$/, function () {
    CarSafetyPage.heroImg.waitForDisplayed({ timeout: 10000 });
    let pageTitle = browser.getTitle();
    expect(pageTitle).to.equal("Car safety | Volvo Cars - International");
});