package stepDefinitions;



import pageobjects.ContactsPage;
import pageobjects.HomePage;

import org.junit.Assert;

import cucumber.api.java.en.Then;
import util.TestUtil;

public class MultipleContactsCreationTest 
{
	HomePage hp;
	ContactsPage cp;
	
	
	@Then("^User switches and moves to new contacts page$")
	public void user_moves_to_new_contacts_page() 
	{
	    hp = new HomePage();
	    hp.clickOnNewContactLink();
	}
	
	@Then("^Verify contacts page is displayed$")
	public void verify_contacts_page_is_displayed() 
	{
	    cp = new ContactsPage();
		Assert.assertTrue(cp.verifyContactsPageText());
	}


	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String fname, String lname, String pos) 
	{		
		System.out.println("Entering in contacts form");
	    cp.enterContactDetails(fname, lname, pos);
	   	    
	}
	
	@Then("^User clicks on contacts tab$")
	public void user_clicks_on_contacts_tab() 
	{
	     hp = new HomePage();
	     TestUtil.switchToFrame();
	     hp.clickOnContactsTab();
	}
	
	@Then("^Verify the new created contact \"([^\"]*)\" under contacts$")
	public void verify_the_new_created_contact_under_contacts(String fname) 
	{
		System.out.println("verifying created contacts");
		Assert.assertTrue(hp.verifyCreatedContacts(fname));
	 
    }
	
	@Then("^User enters only \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_only_and(String lname, String pos)
	{
		System.out.println("Entering only last namr and position in contacts form");
        cp.enterPosAndLastNameDetails(lname, pos);
	
	}

	
	@Then("^User should get error message to enter firstname$")
	public void user_gets_error_message_to_enter_firstname()
	{
	   Assert.assertTrue("Expected Error Message and actual message not matching",cp.validateErrorMsg());
		
	}

	
}
