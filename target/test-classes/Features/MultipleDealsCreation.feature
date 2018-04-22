Feature: Creation of deals in CRM

  @deals
  Scenario: Multiple deals creation using datatable
    Given User navigates to the Free CRM url on the opened browser
    Then Login page is displayed
    Then User enters username and password 
    |     username     |   password   |
    | swathi123testing |  testing123  |
    Then User click on login button
    Then Validate home page title
    Then User switches and moves to new deals page
    Then Verify deals page is displayed
    Then User enters deal details and validate created user
    |  tit     |  amt   | probabile   |   comm    |
    |deal4|  8000  |    50       |    10     |
    |deal5|  9000  |    30       |    20     |
  
  
  
  
  
  # ashi video for asMaps() -> mod24(Cucu basics mod) part4  
  # Paramterising tests with different sets of  data using data tables
  