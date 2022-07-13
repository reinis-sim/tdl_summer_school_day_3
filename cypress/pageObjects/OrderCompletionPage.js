import BasePage from '../pageObjects/basePage'

class OrderCompletionPage extends BasePage {
  static get url () {
    return '/#/order-completion';
  }
  static get completed(){
    return cy.get('[class="confirmation"]');
  }


}

export default OrderCompletionPage;