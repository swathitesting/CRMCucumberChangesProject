package util;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestUtil 
{
	
	public static WebDriver driver;
	
	public static void openBrowser() 
	  {
		  System.setProperty("webdriver.chrome.driver", "driver_exefiles\\chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	  }

	public static void navigateURL()
	{
	      driver.get("https://www.freecrm.com");
	}
	 
	 public static void switchToFrame()
	 {
		 driver.switchTo().frame("mainpanel");
	 }
	  
	  public  boolean isElementPresent(WebElement element)
		{ 
			try
			{
				if(element.isDisplayed())
				  return true;
				else
				  return false;	
					
			}
			
			catch(Exception e)
			{
				return false;
			}
		}

		public  void mouseHoverElementAndClick(WebElement element)
		{
			Actions act = new Actions(driver);
			act.moveToElement(element).click().build().perform();
		
		}
		
		public  void mouseHoverElement(WebElement element)
		{
			Actions act = new Actions(driver);
			act.moveToElement(element).build().perform();
		
		}
		
		public void waitForElementToLoad(WebElement element) 
		{
	        WebDriverWait wait = new WebDriverWait(driver, 30);
	        wait.until(ExpectedConditions.visibilityOf(element));
	    }
		
		public static void wait(int milliSecs) 
	    {
	        try 
	        {
	            Thread.sleep(milliSecs);
	        }
	        catch (InterruptedException e) 
	        {
	            e.printStackTrace();
	        }
	    }

	    public static void shortWait() 
	    {
	        wait(3000);
	    }

	    public void longWait() 
	    {
	        wait(6000);
	    }
	    
	    public static void closeBrowser()
	    {
	    	driver.close();
	    	driver.quit();
	    }
	    
	   	    public static void waitForPageToLoad(WebDriver driver)
	    {
	        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() 
	        {
	            public Boolean apply(WebDriver driver) 
	            {
	                return ((JavascriptExecutor) driver).executeScript(
	                        "return document.readyState").equals("complete");
	            }
	        };
	        Wait<WebDriver> wait = new WebDriverWait(driver, 60);
	        try 
	        {
	            wait.until(expectation);
	        }
	        catch (Throwable error) 
	        {
	            Assert.assertFalse("Timeout waiting for Page Load Request to complete.", true);

	        }
	    }

	    
}
