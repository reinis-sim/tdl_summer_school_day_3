import BasePage from '../pageObjects/basePage'

class SearchPage extends BasePage {
  static get url () {
    return '/#/search';
  }

  static get accountBtn(){
    return cy.get('#navbarAccount');
  }
  static get profileBtn(){
    return cy.get('[aria-label="Go to user profile"]');
  }
  static get ordersAndPaymentBtn(){
    return cy.get('[aria-label="Show Orders and Payment Menu"][role="menuitem"]');
  }
  static get myPaymentOptionsBtn(){
    return cy.get('[aria-label="Go to saved payment methods page"]');
  }
  static get myAddresses(){
    return cy.get('[aria-label="Go to saved address page"]');
  }
  static get lemonJuice(){
    return cy.get('.item-name').contains(" Lemon Juice (500ml) ");
  }
  static get eggfruitJuice(){
    return cy.get('.item-name').contains(" Eggfruit Juice (500ml) ");
  }
  static get strawberryJuice(){
    return cy.get('.item-name').contains(" Strawberry Juice (500ml) ");
  }
  static get raspberryJuice(){
    return cy.get('.item-name').contains(" Raspberry Juice (1000ml) ");
  }
  static get kingMask(){
    return cy.get('.item-name').contains('OWASP Juice Shop "King of the Hill" Facemask');
  }
  static get itemDialog(){
    return cy.get('.mat-dialog-content');
  }
  static get closeDialog(){
    return cy.get('[aria-label="Close Dialog"]');
  }
  static get reviewPanel(){
    return cy.get('.mat-expansion-indicator');
  }
  static get reviewPanelBody(){
    return cy.get('.mat-expansion-panel-body');
  }
  static get reviewField(){
    return cy.get('[aria-label="Text field to review a product"]');
  }
  static get submitBtn(){
    return cy.get('#submitButton');
  }
  static get prodAmount(){
    return cy.get('.mat-select-min-line');
  }
  static get prodAmountSelect24(){
    return cy.get('.mat-option-text').contains("24");
  }
  static get prodAmountSelect36(){
    return cy.get('.mat-option-text').contains("36");
  }
  static get prodAmountSelected(){
    return cy.get('.mat-paginator-range-label');
  }
  static get shirtBasket(){
    return cy.get('[aria-label="Add to Basket"]');
  }
  static get shoppingCart(){
    return cy.get('[aria-label="Show the shopping cart"]');
  }
}

export default SearchPage;
