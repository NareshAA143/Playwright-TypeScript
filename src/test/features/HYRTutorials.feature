Feature: Xpath Axes

@HYR
Scenario: Xpath Axes test
    Given User opens HYR tutorials page
    When User is on Register Page
    Then User fills FirstName
    Then User fills LastName
    Then User fills Email
    Then User fills Password
    Then User fills Repeat Password
    Then User checks the all checkbox
    Then User clicks on Register button

