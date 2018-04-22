$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginAndLogout.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validate Free CRM Login test using examples",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"\u003cuserName\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "login should be \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "expectedResult"
      ],
      "line": 23,
      "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;1"
    },
    {
      "cells": [
        "swathitesting81",
        "testing123",
        "success"
      ],
      "line": 24,
      "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;2"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "success"
      ],
      "line": 25,
      "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3720431787,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Free CRM Login test using examples",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"swathitesting81\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "login should be \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 3756643413,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 8860160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathitesting81",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 59
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 196058027,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 4288687787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.login_should_be(String)"
});
formatter.result({
  "duration": 83407786,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 6024534,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1525311574,
  "status": "passed"
});
formatter.before({
  "duration": 3092432640,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Free CRM Login test using examples",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "login should be \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 3943857920,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 7579734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 184341760,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 4549335040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.login_should_be(String)"
});
formatter.result({
  "duration": 77993387,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 5517227,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1233780906,
  "status": "passed"
});
formatter.uri("MultipleContactsFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Creting contacts feature",
  "description": "",
  "id": "creting-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Creating multiple contacts",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cuserName\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the new created contact \"\u003cfirstName\u003e\" under contacts",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "firstName",
        "lastName",
        "position"
      ],
      "line": 17,
      "id": "creting-contacts-feature;creating-multiple-contacts;;1"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "Danniel",
        "Josh",
        "Manager"
      ],
      "line": 18,
      "id": "creting-contacts-feature;creating-multiple-contacts;;2"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "Henry",
        "Peter",
        "Director"
      ],
      "line": 19,
      "id": "creting-contacts-feature;creating-multiple-contacts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3086787414,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Creating multiple contacts",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Danniel\" and \"Josh\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the new created contact \"Danniel\" under contacts",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 3840894293,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 6741760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 200892160,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 2105629014,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 5579094,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 267375360,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 1014298453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danniel",
      "offset": 13
    },
    {
      "val": "Josh",
      "offset": 27
    },
    {
      "val": "Manager",
      "offset": 38
    }
  ],
  "location": "MultipleContactsCreationTest.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1308275200,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_clicks_on_contacts_tab()"
});
formatter.result({
  "duration": 3138297174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danniel",
      "offset": 32
    }
  ],
  "location": "MultipleContactsCreationTest.verify_the_new_created_contact_under_contacts(String)"
});
formatter.result({
  "duration": 49408000,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 981326934,
  "status": "passed"
});
formatter.before({
  "duration": 3090476800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Creating multiple contacts",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Henry\" and \"Peter\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the new created contact \"Henry\" under contacts",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 4464587946,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 9391787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 199712000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 2445151147,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 5978453,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 241960533,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 865171626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 13
    },
    {
      "val": "Peter",
      "offset": 25
    },
    {
      "val": "Director",
      "offset": 37
    }
  ],
  "location": "MultipleContactsCreationTest.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1874172587,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_clicks_on_contacts_tab()"
});
formatter.result({
  "duration": 3134643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 32
    }
  ],
  "location": "MultipleContactsCreationTest.verify_the_new_created_contact_under_contacts(String)"
});
formatter.result({
  "duration": 41816746,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 3008600747,
  "status": "passed"
});
formatter.uri("MultipleDealsCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Creation of deals in CRM",
  "description": "",
  "id": "creation-of-deals-in-crm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3082053547,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Multiple deals creation using datatable",
  "description": "",
  "id": "creation-of-deals-in-crm;multiple-deals-creation-using-datatable",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@deals"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "swathi123testing",
        "testing123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User switches and moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify deals page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters deal details and validate created user",
  "rows": [
    {
      "cells": [
        "tit",
        "amt",
        "probabile",
        "comm"
      ],
      "line": 15
    },
    {
      "cells": [
        "deal4",
        "8000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "deal5",
        "9000",
        "30",
        "20"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 5175527680,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 28115626,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 215249066,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 3772429226,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 7668480,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_switches_and_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 281860694,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.verify_deals_page_is_displayed()"
});
formatter.result({
  "duration": 942225920,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_enters_deal_details_validate_created_user(DataTable)"
});
formatter.result({
  "duration": 13678871040,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1084939520,
  "status": "passed"
});
});