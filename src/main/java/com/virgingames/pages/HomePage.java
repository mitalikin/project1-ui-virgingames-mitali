package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver,this);//create line page factory model
    }
    @CacheLookup
    @FindBy(xpath="//label[contains(text(),'Accept')]")
    WebElement accept;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome to Virgin Games')]")
    WebElement message;


    public void clickOnAccept() {
         log.info("Clicking on accept cookies " + accept.getText() );
        clickOnElement(accept);
    }
    public String verifyMessage(){
        String message1=getTextFromElement(message);
        log.info("Getting message : " + message.getText() );
        return message1;
    }


}
