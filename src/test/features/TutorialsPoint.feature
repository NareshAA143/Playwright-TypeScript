Feature: Keyboard actions

Background:
Given user launches Tutorials page

@TutorialsPage
Scenario: Copy and paste
When user copies in one input and pastes in another

@TutorialsPageShiftKey
Scenario: Shift key
When user enters Caps letter at start