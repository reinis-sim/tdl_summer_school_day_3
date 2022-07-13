import BasePage from '../pageObjects/basePage'

class CreateAddressPage extends BasePage {
  static get url () {
    return '/#/address/create';
  }
  static get country(){
    return cy.get('[placeholder="Please provide a country."]');
  }
  static get name(){
    return cy.get('[placeholder="Please provide a name."]');
  }
  static get number(){
    return cy.get('[placeholder="Please provide a mobile number."]');
  }
  static get zipCode(){
    return cy.get('[placeholder="Please provide a ZIP code."]');
  }
  static get address(){
    return cy.get('[placeholder="Please provide an address."]');
  }
  static get city(){
    return cy.get('[placeholder="Please provide a city."]');
  }
  static get state(){
    return cy.get('[placeholder="Please provide a state."]');
  }
  static get submitBtn(){
    return cy.get('#submitButton');
  }


}

export default CreateAddressPage;