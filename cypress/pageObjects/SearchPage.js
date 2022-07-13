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


}

export default SearchPage;
