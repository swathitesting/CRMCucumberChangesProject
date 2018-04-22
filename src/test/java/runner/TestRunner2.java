package runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.ExtentCucumberFormatter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue="stepDefinitions",
                 features="src/test/resources/Features/",
                 plugin = {"pretty","html:target/cucumber-pretty",
                                    "json:target/cucumber.json",
                  	                "com.cucumber.listener.ExtentCucumberFormatter:"},
                 tags = {"@negative1"},
                 monochrome = true,
                 dryRun = false)

public class TestRunner2 
{
	@BeforeClass
	public static void setup() 
	 {
		String reportFilePath = "target"+File.separator+"extentreport.html";
	    System.out.println("FilePath:"+reportFilePath);
	    ExtentCucumberFormatter.initiateExtentCucumberFormatter(new File(reportFilePath));
	 }
}
