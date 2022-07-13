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
}

export default SearchPage;
