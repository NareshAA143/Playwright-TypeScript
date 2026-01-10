Feature: File upload

@SingleFileUpload
Scenario: single file upload
Given user launches TestPages URL
When user uploads file

@MultipleFilesUpload
Scenario: Multiple MultipleFilesUpload
Given user navigates to UITAP URL
When user uploads files