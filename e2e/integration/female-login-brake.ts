describe('Homepage', () => {
    beforeEach('viewport', () => {
        cy.viewport('macbook-15');
    });
    it('Load page', () => {
        cy.visit('/');
    });
    it('Like button not found', () => {
        cy.get('app-notice').not('button.is-text');
    });
    it('Click login header', () => {
        cy.get('button.is-light').click();
    });
});

describe('Login wrong', () => {
    beforeEach('viewport', () => {
        cy.viewport('macbook-15');
    });
    it('Fill wrong e-mail', () => {
        cy.get('#email').type('test@test.it');
    });
    it('Fill password', () => {
        cy.get('#password').type('asdf');
    });
    it('Click login', () => {
        cy.get('button.is-primary').click();
    });
    it('Find error', () => {
        cy.get('.notification');
    });
});

describe('Login correct', () => {
    beforeEach('viewport', () => {
        cy.viewport('macbook-15');
    });
    it('Fill correct e-mail', () => {
        cy.fixture('emails.json').then((emails) => {
            cy.get('#email').clear();
            cy.get('#password').clear();
            cy.get('#email').type(emails.femalewrong);
        });
    });
    it('Fill password', () => {
        cy.get('#password').type('asdf');
    });
    it('Click login', () => {
        cy.get('button.is-primary').click();
    });
});
