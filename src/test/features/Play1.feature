Feature: Mouse actions
Background:
Given User navigates to URL

@ClickType
Scenario: Left Click
When user clicks on clicking on element

@RightClickType
Scenario: Right Click
Then user clicks right button on element

@DoubleClick
Scenario: Double click
Then user double clicks on element

@MouseHover
Scenario: MouseHover
Then user mousehovers on element and click

@DragAndDrop
Scenario: DragAndDrop
Then user drag and drops on element

@PageScroll
Scenario: Scroll to bottom
Then user scrolls page to bottom