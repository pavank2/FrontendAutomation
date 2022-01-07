/// <reference types = "Cypress" />

/**
 * This class has functions required for the Landing Page
 */
class LandingPage { 
    login(username,password){
        cy.get('[data-test=notifications-0-agree]').click();
        cy.get('a[href*="/login"]').first().click();
        cy.get('[name="email"]').type(username);
        cy.get('[type="submit"]').click();
        cy.get('[name="password"]').type(password);
        cy.get('[type="submit"]').click();
    }

    getLoginErrorMsg(){  
        cy.get('div[class*="form-error-module_error"]').invoke('text').then(function(errorMsg){
        cy.wrap(errorMsg).as('errorMsg');
        });
    }   
}
    

export default LandingPage;