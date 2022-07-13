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
  static get itemDialog(){
    return cy.get('.mat-dialog-content');
  }

}

export default SearchPage;
