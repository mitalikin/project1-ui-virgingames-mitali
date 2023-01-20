$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "line": 2,
  "name": "Home pageTest",
  "description": "As a user i want to Assert element on HomePage",
  "id": "home-pagetest",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.before({
  "duration": 5056918600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Home page successfully",
  "description": "",
  "id": "home-pagetest;user-should-navigate-to-home-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i should navigate to Home page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 153819400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 134233700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iShouldNavigateToHomePageSuccessfully()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.after({
  "duration": 791854500,
  "status": "passed"
});
formatter.before({
  "duration": 3206105400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify message on home page Welcome to Virgin Games",
  "description": "",
  "id": "home-pagetest;verify-message-on-home-page-welcome-to-virgin-games",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should navigate to Home page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see message displayed Welcome to Virgin Games",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 173881100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iShouldNavigateToHomePageSuccessfully()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iShouldSeeMessageDisplayedWelcomeToVirginGames()"
});
formatter.result({
  "duration": 63141900,
  "status": "passed"
});
formatter.after({
  "duration": 742267100,
  "status": "passed"
});
});