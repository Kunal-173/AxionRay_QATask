/// <reference types="Cypress" />

import { LoginLocators } from "../fixtures/Locators"
import * as testData from "../fixtures/loginPageTestData.json"

export default class LoginPage {

    //Getter Methods

    getUsername() {
        return cy.get(LoginLocators.username);
    }

    getPassword() {
        return cy.get(LoginLocators.password);
    }

    getLoginButton() {
        return cy.get(LoginLocators.loginButton);
    }

    getErrorEmail() {
        return cy.get(LoginLocators.errorEmail);
    }

    getErrorEmailText() {
        return cy.get(LoginLocators.errorEmailText);
    }

    getErrorPassword() {
        return cy.get(LoginLocators.errorPassword)
    }

    getErrorPasswordText() {
        return cy.get(LoginLocators.errorPasswordText);
    }

    getIncorrectPasswordText() {
        return cy.get(LoginLocators.incorrectPasswordText);
    }

    getIncorrectEmailText() {
        return cy.get(LoginLocators.incorrectEmailText);
    }

    getIncorrectEmailError() {
        return cy.get(LoginLocators.incorrectEmail);
    }

    // Actions Methods

    typeUsername(username) {
        this.getUsername().should('be.visible').type(username);
    }

    typePassword(password) {
        this.getPassword().should('be.visible').type(password);
    }

    clickOnLoginButton() {
        this.getLoginButton().should('be.visible').click();
    }

    // Verification Methods

    validateInvalidEmailFormat() {
        this.getErrorEmail().should('be.visible');
        this.getErrorEmailText().should('be.visible').and('have.text', testData.invalidEmailText);
    }

    validateInvalidPasswordFormat() {
        this.getErrorPassword().should('be.visible');
        this.getErrorPasswordText().should('have.text', testData.invalidPasswordText);
    }

    validateIncorrectPassword() {
        this.getErrorPassword().should('be.visible');
        this.getIncorrectPasswordText().should('have.text', testData.incorrectPasswordText)
    }

    validateIncorrectEmail() {
        this.getErrorEmail().should('be.visible');
        this.getIncorrectEmailText().should('be.visible').and('have.text', testData.incorrectEmailText)
    }

    validateLoginButtonIsDisabled() {
        this.getLoginButton().should('be.visible').and('have.attr','aria-disabled', 'true');
    }

    validateLoginButtonIsEnabled() {
        this.getLoginButton().should('be.visible').and('have.attr','aria-disabled', 'false');
    }

    validateIncorrectEmailText() {
        this.getIncorrectEmailError().should('be.visible').and('have.text', testData.incorrectEmailError);
    }

    validateLoginIsSuccessfull() {
        cy.url().should('not.contain', '/login')
    }

    validateLoginIsUnsuccessfull() {
        cy.url().should('contain', '/login')
    }
}