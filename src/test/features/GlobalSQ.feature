Feature: Calendar Feature
Background:
Given User navigates to Globalsq page

@ClickAnyDate
Scenario: Calendar any date
When User fills ios date

@ClickCurrentDate
Scenario: Calendar current date
When User fills current date

@FillDateFromUser
Scenario: User fills date 
When user selects any date

