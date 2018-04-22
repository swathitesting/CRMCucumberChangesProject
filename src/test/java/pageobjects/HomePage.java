package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import util.TestUtil;

public class HomePage extends TestUtil
{

  @FindBy(xpath="//td[contains(text(),'User: seema swats')")
  WebElement userNameLabel;

  @FindBy(xpath="//a[contains(text(),'Contacts')]")
  public WebElement contactsTabLink;
  
  @FindBy(xpath="//a[contains(text(),'Deals')]")
  public WebElement dealsTabLink;
  
  @FindBy(xpath="//a[contains(text(),'New Contact')]")
  WebElement newContactLink;
  
  @FindBy(xpath="//a[contains(text(),'New Deal')]")
  public WebElement newDealLink;
    
  public HomePage()
  {
	  PageFactory.initElements(driver,this);
  }
  
   public String verifyHomePageTitle()
   {
	   return driver.getTitle();
   }
   
   public void clickOnContactsTab()
   {
	   contactsTabLink.click();  
	   shortWait();
   }
   
   
   public void clickOnDealsTab()
   {
	   dealsTabLink.click();
	   shortWait();
   }
   
   public void clickOnNewContactLink()
   {
	   switchToFrame();
	   mouseHoverElement(contactsTabLink);
	   waitForElementToLoad(newContactLink);
	   newContactLink.click();
	   
   }
   
   public void clickOnNewDealLink()
   {
	   switchToFrame();
	   mouseHoverElement(dealsTabLink);
	   waitForElementToLoad(newDealLink);
	   newDealLink.click();
	   
   }
   
   
   public boolean verifyCreatedContacts(String fname)
   {
  	  System.out.println("CREATED CONTACT :"+fname);
  	  WebElement contact = driver.findElement(By.xpath("//td/a[contains(text(),'"+fname+"')]"));
  	  //waitForElementToLoad(contact);
  	  boolean res = contact.isDisplayed();
  	  System.out.println("is contact present :"+res);
  	  return res;
   }
   

   
  
}
