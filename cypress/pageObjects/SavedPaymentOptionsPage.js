import BasePage from '../pageObjects/basePage'

class SavedPaymentOptionsPage extends BasePage {
  static get url () {
    return '/#/saved-payment-methods';
  }
  static get newCard(){
    return cy.get('.mat-expansion-panel');
  }
  static get name(){
    return cy.get('#mat-input-1');
  }
  static get cardNumber(){
    return cy.get('#mat-input-2');
  }
  static get cardMonth(){
    return cy.get('#mat-input-3');
  }
  static get cardYear(){
    return cy.get('#mat-input-4');
  }
  static get submitBtn(){
    return cy.get('.mat-button-wrapper').contains("send");
  }
  static get paymentTable(){
    return cy.get('.mat-table');
  }

}

export default SavedPaymentOptionsPage;