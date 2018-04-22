package stepDefinitions;


import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import pageobjects.HomePage;
import pageobjects.LoginPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import util.TestUtil;

public class LoginTest
{ 
	LoginPage lp; 
	HomePage hp;
	Scenario scenario;
	@Before
	public void setUp(Scenario scenario) 
	{
	  this.scenario = scenario;
	  TestUtil.openBrowser();
	  System.out.println("Test Environment set up....");
	  System.out.println("Exceuting Scenario"+scenario.getName());
	}
	@After
	public void close()
	{
		 scenario.write("Finished Scenario...");
		  if(scenario.isFailed())
		  {
			  scenario.embed(((TakesScreenshot)TestUtil.driver).getScreenshotAs(OutputType.BYTES),"image/png");
		  }
		  
		TestUtil.closeBrowser();
	}
	
	@Given("^User navigates to the Free CRM url on the opened browser$")
	public void User_navigates_to_the_Free_CRM_url_on_the_opened_browser() 
	{
      lp = new LoginPage();
      TestUtil.navigateURL();
	}

	@Then("^Login page is displayed$")
	public void login_page_is_displayed() 
	{
     String title = lp.verifyLoginPageTitle(); //actual
     Assert.assertTrue("Expected and Actual Title not matching", title.contains("Free CRM"));
	}

	@Then("^User enters username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_username_as_and_password_as(String uname, String passwd)
	{
	 lp.enterUserNamePassword(uname, passwd);
	}

	@Then("^User click on login button$")
	public void User_click_on_login_button() 
	{
       lp.clickOnLoginBtn();

	}
		
	@Then("^login should be \"([^\"]*)\"$")
	public void login_should_be(String expectedResult)
	{
	 	lp.verifyLogoTextAfterLogin();
	}
	
	@Then("^Validate home page title$")
	public void validate_home_page_title() 
	{
		hp = new HomePage();
        String homeTitle = hp.verifyHomePageTitle(); 
        System.out.println("Actual Home pg title: "+homeTitle);
        Assert.assertEquals("Home page title is not matching","CRMPRO",homeTitle);
	}
	
	@Then("^Validate logotext after login$")
	public void validate_logotext_after_login() 
	{
		Assert.assertTrue("Logotext is not matching", lp.verifyLogoTextAfterLogin());
	}
	
}

