export const authentication = {
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD'),
        fullName: Cypress.env('FULLNAME')
}

export function getLoginId() {
    return eval(authentication);
}