/// <reference types = "Cypress" />

import ProductPage from "./LandingPage";

/**
 * This class has functions required for the HomePage of the app
 */
class HomePage {    
    getLoginUsername(username){
        cy.get('div[class*="user-state-badge_wrapper"]').click();
        cy.get('div[class*="account-menu_accountLogoTitle"]').first().invoke('text').then(function(email){
        cy.wrap(email).as('email');
        });
    }
}
export default HomePage;
