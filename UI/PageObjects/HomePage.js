class HomePage {

    get moreAboutCarSafetyHyperlink() { return $('[data-autoid="iconCallouts:cta"]') }
    get safetyFeatureSpeedCapIcon() { return $('[data-icon="speed-cap"]') }
    get safetyFeatureHighwayPilotIcon() { return $('[data-icon="highway"]') }
    get safetyFeatureDriverMonitoringCamsIcon() { return $('[data-icon="camera2"]') }
    get safetyFeatureCareKeyIcon() { return $('[data-icon="key"]') }
    get acceptCookiesButton() { return $('[title="Accept"]') }
    get videoAmy() { return $('[data-autoid="videoTestimonials:video-0"]') }
    get videoSummer() { return $('[data-autoid="videoTestimonials:video-1"]') }
    get videoLinda() { return $('[data-autoid="videoTestimonials:video-2"]') }
    get videoAlex() { return $('[data-autoid="videoTestimonials:video-3"]') }
    get learnMoreButton() { return $('[data-autoid="imageWithText:primaryCta"]') }


    acceptCookies() {
        browser.pause(2000);
        this.acceptCookiesButton.waitForClickable({ timeout: 3000 });
        this.acceptCookiesButton.click();
    }

    clickMoreAboutCarSafetyHyperlink() {
        browser.execute(function () {
            document.querySelector('[data-autoid="IconCallouts"]').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        })
        this.moreAboutCarSafetyHyperlink.waitForDisplayed({ timeout: 6000 });
        this.moreAboutCarSafetyHyperlink.click();
    }

    clickLearnMoreButton() {
        this.learnMoreButton.waitForDisplayed({ timeout: 6000 });
        this.learnMoreButton.click();
    }

    speedCapIconDisplayed() {
        browser.execute(function () {
            document.querySelector('[data-autoid="IconCallouts"]').scrollIntoView()
        })
        this.safetyFeatureSpeedCapIcon.waitForDisplayed({ timeout: 6000 });
        return this.safetyFeatureSpeedCapIcon.isDisplayed();
    }

    highwayPilotIconDisplayed() {
        this.safetyFeatureHighwayPilotIcon.waitForDisplayed({ timeout: 6000 });
        return this.safetyFeatureHighwayPilotIcon.isDisplayed();
    }

    driverMonitoringCamIconDisplayed() {
        this.safetyFeatureDriverMonitoringCamsIcon.waitForDisplayed({ timeout: 6000 });
        return this.safetyFeatureDriverMonitoringCamsIcon.isDisplayed();
    }

    careKeyIconDisplayed() {
        this.safetyFeatureCareKeyIcon.waitForDisplayed({ timeout: 3000 });
        return this.safetyFeatureCareKeyIcon.isDisplayed();
    }

    videoAmyDisplayed() {
        browser.execute(function () {
            document.querySelector('[preload="auto"]').scrollIntoView()
        })
        browser.execute(function () {
            document.querySelector('[data-component="VideoTestimonials"]').scrollIntoView();
        })
        this.videoAmy.waitForExist({ timeout: 10000 });
        return this.videoAmy.isDisplayed();
    }

    videoSumerDisplayed() {
        this.videoSummer.waitForExist({ timeout: 10000 });
        return this.videoSummer.isDisplayed();
    }

    videoLindaDisplayed() {
        browser.execute(function () {
            document.querySelector('[data-component="VideoTestimonials"]').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        })
        this.videoLinda.waitForExist({ timeout: 10000 });
        return this.videoLinda.isDisplayed();
    }

    videoAlexDisplayed() {
        this.videoAlex.waitForExist({ timeout: 10000 });
        return this.videoAlex.isDisplayed();
    }
}

export default new HomePage();