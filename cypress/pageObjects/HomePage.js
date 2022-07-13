import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get accountBtn(){
    return cy.get('[id="navbarAccount"]');
  }
  static get loginBtn(){
    return cy.get('[id="navbarLoginButton"]');
  }
}

export default HomePage;
