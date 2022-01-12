Feature: Verify Safety Features

############# Safety Features Tests ############

@Ui @SafetyFeature
Scenario: Verify Safety Features on the Home Page
Given I Naviate to Home Page
When I Accept Cookies
Then I Verify Safety Features are Listed
Then I Click Know More About Car Safety Hyperlink
Then I Verify that I am navigated to Car Safety Page

######################################################