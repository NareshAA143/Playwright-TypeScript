Feature: RedBus

@RedBus
Scenario: AutoSuggest City 
    Given User opens RedBus
    When User enters City in From text box
    Then User Clicks on option
    Then User enters City in To text box
    Then User Clicks on To City option

   