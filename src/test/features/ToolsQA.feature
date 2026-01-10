Feature: Windows
Background:
Given User launches ToolsQA URL
When User clicks on AlertsWindows
Then User clicks on BrowserWindows

@SingleWindow
Scenario: single window 
Then User clicks on NewTab

@MultipleWindows
Scenario: MultipleWindows
Then User clicks on NewWindow