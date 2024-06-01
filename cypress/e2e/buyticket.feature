Feature: Buy a ticket

    As a user, I should be able to purchase a ticket successfully

    Scenario Outline: Make a <option> purchase
        Given I am on the Dummy ticket landing page
        And I click on the BUY TICKET link
        When I select "<option>" as my ticket option
        And I am on the personal details section 
        Then I fill a valid first name and surname
        And I select a date of birth
        And I choose female as my sex
        When I am on the travel details section 
        And I select a "trip type"
        And I input a "fromcity" of "Baltimore"
        And I input a "tocity_field" of "Paris"
        And I select a departure date
        Then I scroll down to the Billing section
        And I fill my phone number and email address
        When I select a country
        Then I fill my street address and city 
        And I select a state
        And I fill in my postal code
        Then I can see my Order 
        And I select Paypal as my payment option
        Then I click on the proceed to paypal button
        And I am redirected to the Paypal login page
        
        Examples:
            | option |
            | Dummy ticket for Visa Application |
            | Dummy return ticket |
            | Dummy hotel booking |
            | Dummy ticket and hotel |
            | Past dated ticket |											
            

