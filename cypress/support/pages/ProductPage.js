/// <reference types = "Cypress" />

/**
 * This class has functions required for the Product Page
 */


class ProductPage {

    selectMinPriceProducts(productCategory){
        let selectedProductsList = [];
        let totalPrice=0;
        
        //Iterate through each of the product category (Almond & Aloe OR SPF-30 & SPF-50)
        for (const criteria of productCategory){
            //Select cheapest product and add its price to the total price
            //This is a Cypress custom command
            cy.selectCheapestProduct(criteria,selectedProductsList).then(function(minPrice){
                totalPrice += Number(minPrice);
            }).then(function(){
               cy.wrap(totalPrice).as('totalPrice');
            });
        }
    }
    
    checkOutToCart() {
        cy.get('.thin-text').click();
    }
}

export default ProductPage;