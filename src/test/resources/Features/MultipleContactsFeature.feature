Feature: Creting contacts feature

  @contacts
  Scenario Outline: Creating multiple contacts
    Given User navigates to the Free CRM url on the opened browser
    Then Login page is displayed
    Then User enters username as "<userName>" and password as "<password>"
    Then User click on login button
    Then Validate home page title
    Then User switches and moves to new contacts page
    Then Verify contacts page is displayed
    Then User enters "<firstName>" and "<lastName>" and "<position>"
    Then User clicks on contacts tab
    Then Verify the new created contact "<firstName>" under contacts

    Examples: 
      | userName         | password   | firstName | lastName | position |
      | swathi123testing | testing123 | Danniel   | Josh     | Manager  |
      | swathi123testing | testing123 | Henry     | Peter    | Director |

  @negative1
  Scenario Outline: Validate error message for not entering FirstName
    Given User navigates to the Free CRM url on the opened browser
    Then Login page is displayed
    Then User enters username as "<userName>" and password as "<password>"
    Then User click on login button
    Then Validate home page title
    Then User switches and moves to new contacts page
    Then Verify contacts page is displayed
    Then User enters only "<lastName>" and "<position>"
    Then User should get error message to enter firstname

    Examples: 
      | userName         | password   | lastName |  position     |
      | swathi123testing | testing123 | Sam      | TechEngineer |
