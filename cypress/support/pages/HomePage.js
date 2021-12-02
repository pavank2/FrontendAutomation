/// <reference types = "Cypress" />

import ProductPage from "./ProductPage";

/**
 * This class has functions required for the HomePage of the app
 */
class HomePage {
     
    //Navigates to the right product page based on temperature
    navigateToCorrectPage(){  
        //Getting products data from fixture
        cy.fixture('example').then(function(data){
            this.data = data;
        })

        // Navigate to the right page based on temperature
        cy.get('#temperature').invoke('text').then(function(temperature) { 
            temperature = temperature.slice(0,-2); 
            if(temperature < 19){
                cy.get('a[href="/moisturizer"]').click();
                cy.wrap(this.data.moisturizersCategory).as('productCategory');
            } 
            else {  // temperature > 34
                cy.get('a[href="/sunscreen"]').click();
                cy.wrap(this.data.sunscreensCategory).as('productCategory');
            }

            // not handling temperature between 19 & 34 as it is never the case!!
        });
    }
}

export default HomePage;
