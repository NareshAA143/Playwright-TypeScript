Feature: Collections
# Background:
# Given User navigates to Sausedemo URL
# When User fills username
# Then User fills password
# Then User clicks login button

@loginSause
Scenario Outline: Login to SauceDemo with valid credentials
  Given User navigates to Sausedemo URL
  When User fills username "<username>"
  And User fills password "<password>"
  Then User clicks login button

Examples:
  | username        | password     |
  | standard_user   | secret_sauce |
  |locked_out_user| secret_sauce |
  |problem_user| secret_sauce |
  |performance_glitch_user| secret_sauce |
  |error_user| secret_sauce |
  |visual_user| secret_sauce |

@AddToCart
Scenario: AddToCart
Then User sees products
Then User clicks on AddToCart for specific products
 
@FilterByNameAtoZ
Scenario: Short A To Z
Then User filters By ATOZ

@FilterByNameZtoA
Scenario: Short Z To A
Then User filters By ZToA

@FilterByPriceLowToHigh 
Scenario: Short Low To High
Then User filters By LowToHigh

@FilterByPriceHighToLow
Scenario: Short High To Low
Then User filters By HighToLow