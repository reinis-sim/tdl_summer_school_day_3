import BasePage from '../pageObjects/basePage'

class DeliveryMethodPage extends BasePage {
  static get url () {
    return '/#/delivery-method';
  }
  static get standardDelivery(){
    return cy.get('.mat-row').contains('Standard Delivery');
  }
  static get continueBtn(){
    return cy.get('.mat-icon').contains('navigate_next');
  }


}

export default DeliveryMethodPage;