/// <reference types="Cypress" />

import { loginEndpoint } from "../fixtures/endpoint.json";
import { getLoginId } from "../config/authentication";
import LoginPage from "../pages/loginPage";

const login = new LoginPage();

let { email, password } = getLoginId();

describe('Login and Authentication Scenarios', () => {

  beforeEach('Visit the Login Page', ()=> {
    cy.visit(loginEndpoint);
  })

  it('Login scenario - Invalid email format with valid password', () => {

    login.typeUsername('sukantmajumdar');

    login.typePassword(password);

    login.validateInvalidEmailFormat();

    login.validateLoginButtonIsDisabled();

    login.clickOnLoginButton();

    login.validateLoginIsUnsuccessfull();
    
  })

  it('Login scenario - Invalid password format with valid username', () => {

    login.typeUsername(email);

    login.typePassword('su');

    login.validateLoginButtonIsDisabled();

    login.clickOnLoginButton();

    login.validateInvalidPasswordFormat();

    login.validateLoginIsUnsuccessfull();

  })

  it('Login scenario - Incorrect password with valid username', () => {

    login.typeUsername(email);

    login.typePassword('12345678');

    login.validateLoginButtonIsEnabled();

    login.clickOnLoginButton();

    login.validateIncorrectPassword();

    login.validateLoginIsUnsuccessfull();

  })

  it('Login scenario - Incorrect email with valid password', () => {

    login.typeUsername('sukantmajumdar@gmail.com');

    login.typePassword(password);

    login.validateLoginButtonIsDisabled();

    login.validateIncorrectEmailText();

    login.clickOnLoginButton();

    login.validateIncorrectEmail();

    login.validateLoginIsUnsuccessfull();

    })

  it('Login Scenario - Valid username and password', () => {

    login.typeUsername(email);

    login.typePassword(password);

    login.validateLoginButtonIsEnabled();

    login.clickOnLoginButton();

    login.validateLoginIsSuccessfull();

  })

})