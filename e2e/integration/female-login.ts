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
            cy.get('#email').type(emails.female);
        });

    });
    it('Fill password', () => {
        cy.get('#password').type('asdf');
    });
    it('Click login', () => {
        cy.get('button.is-primary').click();
    });
});

describe('Profile page', () => {
    beforeEach('viewport', () => {
        cy.viewport('macbook-15');
    });
    it('Navigate to homepage', () => {
        cy.get('img').click();
    });
});

describe('Homepage', () => {
    beforeEach('viewport', () => {
        cy.viewport('macbook-15');
    });
    it('Click like button first notice', () => {
        cy.get('app-notice').eq(0).find('button.is-text').click();
    });
    it('Is like button first notice clicked', () => {
        cy.get('app-notice').eq(0).find('button.is-text').should('have.class', 'active');
    });
    it('Re-click like button first notice', () => {
        cy.get('app-notice').eq(0).find('button.is-text').click();
    });
    it('Is like button first notice not clicked', () => {
        cy.get('app-notice').eq(0).not('button.is-text.active');
    });
    it('Click name button header', () => {
        cy.get('.dropdown-trigger').click();
    });
    it('Click "Profile"', () => {
        cy.get('.dropdown-menu').find('.dropdown-item').contains('Profile').click();
    });
});

describe('Profile', () => {
    beforeEach('viewport', () => {
        cy.viewport('macbook-15');
    });
    it('Click name button header', () => {
        cy.get('.dropdown-trigger').click();
    });
    it('Click "Logout"', () => {
        cy.get('.dropdown-menu').find('.dropdown-item').contains('Logout').click();
    });
});
