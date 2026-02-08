Feature: OrangeHRM application Feature
Background:
Given User navigates to OrangeHRM Loginpage
When User enters username and password
Then user clicks on login button

@OrangeHRMLogin
Scenario: Login validation
Then user sees Dashboard page

@OrangeHRMAdmin
Scenario: Admin functionality
And user clicks on Admin button
And user enters username
And user selects user role
And user enters employee name
And user selects status  
Then user clicks on search

@OrangeHRMLeave
Scenario: Leave functionality
Then user clicks on user profile dropdown
Then user clicks on support option
Then user clicks on Leave button
Then user clicks on selects Show leave with status dropdown
Then user selects Cancelled dropdown
Then user selectes leave Type
Then user enters EmployeeName
Then user selects Sub unit
Then user clicks on Include Past Employees


@OrangeHRMAdminTable
Scenario: Admin Table functionality
And user clicks on Admin button
And sees number of rows in the table
Then user sees the content of each row in the table
Then user sees the number of checkboxes in the table
Then user checks all the checkboxes in the table
