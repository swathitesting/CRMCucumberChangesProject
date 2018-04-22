package pageobjects;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import cucumber.api.DataTable;
import util.TestUtil;

public class LoginPage extends TestUtil
{
	@FindBy(name="username")
	public WebElement userName;
	
	@FindBy(name="password")
	public WebElement password;
	
	@FindBy(xpath="//input[@type='submit']")
	public WebElement loginBtn;
	
	@FindBy(xpath="//img[contains(@class,'img-responsive')]")
	public WebElement crmLogo;
	
	@FindBy(xpath="//td[contains(text(),'CRMPRO')]")
	public WebElement logoText;

	@FindBy(xpath="//a[contains(text(),'Logout')]")
	public WebElement logoutLink;
	
	public LoginPage()
	{
		PageFactory.initElements(driver,this);
	}
	
	public void enterUserNamePassword(String uname,String passwd)
	{
		userName.sendKeys(uname);
		password.sendKeys(passwd);
	}
	
	public void clickOnLoginBtn()
	{
		//loginBtn.click();
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", loginBtn);
	}
    
	public String verifyLoginPageTitle()
	{
		return driver.getTitle();
	}
	
	public boolean verifyCRMImage()
	{
 	   return crmLogo.isDisplayed();
	}
	
		
	public boolean verifyLogoTextAfterLogin()
	{
		switchToFrame();	 
		return  logoText.isDisplayed();
	}
	
	public void validateMultipleUsers(String expectedResult)
	{
		 String actualResult=null;
		 System.out.println("Login expected: "+expectedResult);
         
         boolean res = verifyLogoTextAfterLogin();
		 System.out.println("logo text displayed: "+res);
		 if(res)
		 {	
		   	actualResult="success";
		    logoutLink.click();
	     }
		 else
			actualResult="failure";
		    
        Assert.assertEquals(expectedResult, actualResult);
	}
	
	public void enterUserNamePassword_AsMaps(DataTable table1)
	{
	 List<Map<String,String>> dataList1 = table1.asMaps(String.class,String.class);
	 userName.sendKeys(dataList1.get(0).get("username"));
	 password.sendKeys(dataList1.get(0).get("password"));

	}
}
