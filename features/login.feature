
Feature: Performing a login

    As a user on login page
    I want to login
    Because I want to test the application

    Background:

        Given I am on login page 

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should see my name "Tanya Illliana" on account section

        Examples:
        |user| |password|
        |"addUser"| |"Addpassword"|