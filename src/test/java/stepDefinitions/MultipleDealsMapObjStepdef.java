package stepDefinitions;

import pageobjects.DealsPage;
import pageobjects.HomePage;
import pageobjects.LoginPage;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import util.TestUtil;

public class MultipleDealsMapObjStepdef 
{
	LoginPage lp;
	HomePage hp;
	DealsPage dp;
	
	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable table1) 
	{
	    lp = new LoginPage();
	    lp.enterUserNamePassword_AsMaps(table1);
	}

	@Then("^User switches and moves to new deals page$")
	public void user_switches_and_moves_to_new_deals_page() 
	{
	    hp = new HomePage();
		hp.clickOnNewDealLink();
	}	

	@Then("^Verify deals page is displayed$")
	public void verify_deals_page_is_displayed() 
	{
      dp = new DealsPage();
      Assert.assertTrue(dp.verifyDealsPageText());

	}

	@Then("^User enters deal details and validate created user$")
	public void user_enters_deal_details_validate_created_user(DataTable table2) 
	{
	 dp.enterDealDetails_AsMaps(table2);
	}
	
	

}
