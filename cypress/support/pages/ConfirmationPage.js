/// <reference types = "Cypress" />

/**
 * This class has functions required for the Confirmation Page
 */
class ConfirmationPage {

    getPaymentconfirmationMsg(){
        cy.contains('PAYMENT').invoke('text').then(function(confirmationMsg){
             cy.wrap(confirmationMsg).as('confirmationMsg');
        });
    }

}
export default ConfirmationPage;