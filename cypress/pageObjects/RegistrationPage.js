import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get emailField(){
    return cy.get('#emailControl');
  }
  static get passwordField(){
    return cy.get('#passwordControl');
  }
  static get repeatPasswordField(){
    return cy.get('#repeatPasswordControl');
  }
  static get secQuestion(){
    return cy.get('[name="securityQuestion"]');
  }
  static get petName(){
    return cy.get('[class="mat-option-text"]').contains(" Name of your favorite pet? ");
  }
  static get answerField(){
    return cy.get('#securityAnswerControl');
  }
  static get registerBtn(){
    return cy.get('.material-icons').contains("person_add");
  }
}

export default RegistrationPage;
