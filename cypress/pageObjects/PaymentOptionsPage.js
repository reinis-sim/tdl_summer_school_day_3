import BasePage from '../pageObjects/basePage'

class PaymentOptionsPage extends BasePage {
  static get url () {
    return '/#/payment/shop';
  }
  static get cardSelect(){
    return cy.get('.mat-radio-inner-circle');
  }
  static get continueBtn(){
    return cy.get('.mat-icon').contains('navigate_next');
  }


}

export default PaymentOptionsPage;