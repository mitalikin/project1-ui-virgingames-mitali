package com.virgingames.steps;

import com.virgingames.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomePageStep {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Accept cookies$")
    public void iClickOnAcceptCookies() {
        new HomePage().clickOnAccept();
    }

    @Then("^i should navigate to Home page successfully$")
    public void iShouldNavigateToHomePageSuccessfully() {

    }

    @And("^I should see message displayed Welcome to Virgin Games$")
    public void iShouldSeeMessageDisplayedWelcomeToVirginGames() {
        String expectedMessage = "Welcome to Virgin Games";
        String actualMessage = new HomePage().verifyMessage();
        Assert.assertEquals("Message is not displayed", expectedMessage, actualMessage);
    }
}
