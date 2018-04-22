Feature: Free CRM Login feature

  
@login1
  Scenario: Validate Free CRM login test
    Given User navigates to the Free CRM url on the opened browser
    Then Login page is displayed
    Then User enters username as "swathi123testing" and password as "testing13"
    Then User click on login button
    Then Validate home page title
    Then Validate logotext after login
      
  @login2
  Scenario Outline: Validate Free CRM Login test using examples
    Given User navigates to the Free CRM url on the opened browser
    Then Login page is displayed
    Then User enters username as "<userName>" and password as "<password>" 
    Then User click on login button
    Then login should be "<expectedResult>"
    Then Validate home page title

    Examples: 
      | userName         | password   | expectedResult |
      | swathitesting81  | testing123 | success        |
      | swathi123testing | testing123 | success       |
      
