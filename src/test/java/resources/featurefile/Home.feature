@HomePage
Feature:Home pageTest
  As a user i want to Assert element on HomePage
  Scenario: User should navigate to Home page successfully
    Given I am on homepage
    When I click on Accept cookies
    Then i should navigate to Home page successfully

    Scenario: verify message on home page Welcome to Virgin Games
      Given I am on homepage
      When I click on Accept cookies
      Then i should navigate to Home page successfully
      And I should see message displayed Welcome to Virgin Games

