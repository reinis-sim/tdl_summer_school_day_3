import BasePage from '../pageObjects/basePage'

class OrderSummaryPage extends BasePage {
  static get url () {
    return '/#/order-summary';
  }
  static get placeOrder(){
    return cy.get('.mat-button-wrapper').contains('Place your order and pay');
  }


}

export default OrderSummaryPage;