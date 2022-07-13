import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
  static get userEmail(){
    return cy.get('#email');
  }
  static get userPassword(){
    return cy.get('#password');
  }
  static get loginBtn(){
    return cy.get('#loginButton');
  }
  static get registerBtn(){
    return cy.get('[routerlink="/register"]');
  }

}

export default LoginPage;
