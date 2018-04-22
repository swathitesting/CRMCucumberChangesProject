package pageobjects;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import util.TestUtil;

public class ContactsPage extends TestUtil
{
 @FindBy(id="first_name")
  WebElement firstname;
 
 @FindBy(id="surname")
  WebElement lastname;
 
 @FindBy(id="company_position")
  WebElement position;
 
 @FindBy(xpath="//input[@type='submit']")
 WebElement saveBtn;
 
 @FindBy(xpath="//legend[contains(text(),'Contact')]")
 WebElement contactsPageText;
 
 @FindBy(xpath="//a[contains(text(),'Contacts')]")
 WebElement contactsTabLink;


 
 public ContactsPage()
 {
	  PageFactory.initElements(driver,this);

 }
 
 public boolean verifyContactsPageText()
 {
	 return contactsPageText.isDisplayed();
 }
 
 public void enterContactDetails(String fname,String lname,String pos)
 {
	 firstname.sendKeys(fname);
	 lastname.sendKeys(lname);
     position.sendKeys(pos);
     saveBtn.click();
     //shortWait();
     driver.navigate().refresh();
     
 }
 
 public void enterPosAndLastNameDetails(String lname,String pos)
 {
	 lastname.sendKeys(lname);
     position.sendKeys(pos);
     saveBtn.click();
        
 }
 
 public boolean validateErrorMsg()
 {
	  Alert al = driver.switchTo().alert();
	  String actualAlertText = al.getText();
	  al.accept();
      if(actualAlertText.equalsIgnoreCase("Enter First Name"))
    	  return true;
      else 
    	  return false;
 }
 
}
