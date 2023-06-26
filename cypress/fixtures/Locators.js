export const LoginLocators = {
    username: '[data-test="login-email-input"]',
    password: '[data-test="login-password-input"]',
    errorEmail: '#cu-login-form__error_email',
    errorEmailText: '#cu-login-form__error_email .cu-form__error-text',
    loginButton: '[data-test="login-submit"]',
    errorPassword: '#cu-login-form__error_password',
    errorPasswordText: '#cu-login-form__error_password .cu-form__error-text',
    incorrectPasswordText: '[data-test="form__error-password"] [data-test="form__error"]',
    incorrectEmailText: 'p.cu-toast-new__text-title',
    incorrectEmail: '[data-test="login-email-input-error"]'
}