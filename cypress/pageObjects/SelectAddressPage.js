import BasePage from '../pageObjects/basePage'

class SelectAddressPage extends BasePage {
  static get url () {
    return '/#/address/select';
  }
  static get unitedFake(){
    return cy.get('.mat-row').contains('United Fakedom');
  }
  static get continueBtn(){
    return cy.get('[aria-label="Proceed to payment selection"]');
  }


}

export default SelectAddressPage;
