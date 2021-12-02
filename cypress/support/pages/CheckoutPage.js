/// <reference types = "Cypress" />

/**
 * This class has functions required for the Checkout Page
 */
class CheckoutPage {

    getProductsonCheckoutPage(){
        let productsOnCheckoutPage = [];
        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').then(function(firstProduct){
            productsOnCheckoutPage.push(firstProduct);
        });
        cy.get('tbody > :nth-child(2) > :nth-child(1)').invoke('text').then(function(secondProduct){
            productsOnCheckoutPage.push(secondProduct);
        });
        cy.wrap(productsOnCheckoutPage).as('productsOnCheckoutPage');
    }
   
    getAmountOnCheckoutPage(){
        cy.get('#total').invoke('text').then(function(amountOnCheckoutPage){
            amountOnCheckoutPage = amountOnCheckoutPage.split(' ')[2]
            cy.wrap(amountOnCheckoutPage).as('amountOnCheckoutPage');
        });
    } 

    makePayment(cardDetails){
        cy.get('.stripe-button-el').click();
        cy.getIframeBody().find('.emailInput').click().type(cardDetails.email);
        cy.wait(1000);   // cypress type() has flakiness issues where it jumbles input, just giving it some time here
        cy.getIframeBody().find('.cardNumberInput').click().type(cardDetails.cardNumber);
        cy.getIframeBody().find('.cardExpiresInput').click().type(cardDetails.expiry);
        cy.getIframeBody().find('.cardCVCInput').click().type(cardDetails.cvc);
        cy.getIframeBody().find('.zipCodeInput').click().type(cardDetails.zipCode);
        cy.getIframeBody().find('.buttonsView').click();
    }
}

export default CheckoutPage;