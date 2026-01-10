Feature: Flipkart
Background: 
Given user launches Flipkart URL

@FlipkartKeyBoard
Scenario: Keyboard actions
When user enters product name in search box

@SetCollection
Scenario: SetCollection
When User enters laptop in search
Then User clicks enter
Then User sees unique brands

@MapCollection
Scenario: MapCollection
When User enters laptop in search
Then User clicks enter
Then User sees products with prices