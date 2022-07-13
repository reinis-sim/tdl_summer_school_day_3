import BasePage from '../pageObjects/basePage'

class SavedAddressesPage extends BasePage {
  static get url () {
    return '/#/address/saved';
  }
  static get addAddress(){
    return cy.get('[aria-label="Add a new address"]');
  }
  static get addressTable(){
    return cy.get('.mat-table');
  }


}

export default SavedAddressesPage;