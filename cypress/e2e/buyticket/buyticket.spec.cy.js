import {Given, When, Then}from '@badeball/cypress-cucumber-preprocessor'
const { faker } = require("@faker-js/faker")
let data

before(() => {
    cy.fixture('selectors').then(sel => {
        data = sel
    })
})



Given(/^I am on the Dummy ticket landing page$/, () => {
	cy.landingPageValidations()
});

Then(/^I click on the BUY TICKET link$/, () => {
	cy.contains('Buy Ticket').click()
});

When(/^I select "([^"]*)" as my ticket option$/, (args1) => {
    cy.viewSpecifiedElement('Please complete the below form and follow instructions in order to make your Dummy ticket')
});

Then(/^I am on the personal details section$/, () => {
    cy.viewSpecifiedElement('Passenger details:')
});

Then(/^I fill a valid first name and surname$/, () => {
	cy.typeAText(data.firstNameField,faker.name.firstName())
    cy.typeAText(data.lastNameField, faker.name.lastName())
});

Then(/^I select a date of birth$/, (args1) => {
	cy.clickSpecifiedElement(data.dob)
    cy.get(data.monthDropdown).select('Jul')
    cy.get(data.yearDropdown).select('1999')
    cy.get(data.day).click()
    cy.wait(2000)
});


Then(/^I choose female as my sex$/, () => {
	cy.clickSpecifiedElement(data.femaleSexRadio)
});

When(/^I am on the travel details section$/, () => {
	cy.viewSpecifiedElement('Travel Details')
});

When(/^I select a "([^"]*)"$/, (args1) => {
	cy.clickSpecifiedElement(data.onewayTripType)
});

When(/^I input a "([^"]*)" of "([^"]*)"$/, (field,text) => {
	cy.inputDetails(data.originField, "Baltimore")
    cy.inputDetails(data.destinationField, "Paris")
});

When(/^I select a departure date$/, () => {
	cy.clickSpecifiedElement(data.departDate)
	cy.clickSpecifiedElement(data.nextBtn)
	cy.contains("[data-handler='selectDay'] a", "20").click()
});


Then(/^I scroll down to the Billing section$/, () => {
	cy.viewSpecifiedElement('Billing Details')
});

Then(/^I fill my phone number and email address$/, (element,text) => {
	cy.typeAText(data.phoneNumField, faker.phone.number('234804#######'))
	cy.typeAText(data.emailField, faker.internet.email())
});

When(/^I select a country$/, (args1) => {
	cy.clickSpecifiedElement(data.countryField)
	cy.clickSpecifiedElement(data.zambiaElement)
});

Then(/^I fill my street address and city$/, () => {
	cy.typeAText(data.addressField, faker.location.secondaryAddress())
	cy.typeAText(data.cityField, faker.location.city())
});

Then(/^I select a state$/, (args1) => {
	cy.clickSpecifiedElement(data.stateField)
	cy.get(data.searchBox).type('Lusaka{enter}')
});


When(/^I fill in my postal code$/, () => {
	cy.typeAText(data.postalCodeField, "93024")
});

Then(/^I can see my Order$/, () => {
	cy.get(data.orderTable).should('exist')
});

Then(/^I select Paypal as my payment option$/, () => {
	cy.get(data.paystackRadioBtn).click()
});

Then(/^I click on the proceed to paypal button$/, () => {
	cy.get(data.orderBtn).click()
});

Then(/^I am redirected to the Paypal login page$/, () => {
	cy.get('#headerText').should('be.visible').and('contain.text', 'Log in to PayPal')
});
