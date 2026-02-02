Feature: LetCode webtables

Background:
Given User navigates to LetCode

@ShoppingList
Scenario: Table data validation
When User sees rows of Table
Then User sees Table heading columns
Then User sees columns of Table
Then User sees all items in shopping list
Then User checks 2nd row 1st column cell

@LetsHandleIt
Scenario: CheckBox Table
When User sees handle table
Then User sees table headers
Then User sees table rows
Then User checks 1st checkbox

@LetsHandleItFilterCheckboxByName
Scenario: Users clicks checkbox based on Name
Then User checks checkbox by name

@SortableTable
Scenario:Sort verify
When User sees sort Table
Then User sees sorted calories