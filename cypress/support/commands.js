
// This custom command selects and clicks on the chepeast product
Cypress.Commands.add('selectCheapestProduct', (product,selectedProductsList) => { 
    let minPrice = Number.MAX_SAFE_INTEGER;  // Initiaizing the minimum Price
    let cheapestProduct = null;
    let selectedProduct;
    
    // For each product
    cy.get('.btn.btn-primary').each(function ($el, index,$list) {         
        // 'onclick' attribute has both product name and price
        let textToParse = $el.attr('onclick');     
        //extract the product price from 'onclick' value               
        let price = parseInt(textToParse.slice(-4,-1),10); 
        //get the product name from 'onclick' value                 
        let match= textToParse.match(/'([^']+)'/)[1];
        cy.log(match);
        //Check if product name includes our required category and it is lesser than current minPrice
        if(match.toLowerCase().includes(product.toLowerCase())
        && price < minPrice){
            minPrice = price;
            cheapestProduct = $el;    
            selectedProduct = match;         
        }
    }).then(() => {
        cy.wrap(cheapestProduct).click();
        selectedProductsList.push(selectedProduct);
        cy.wrap(selectedProductsList).as('selectedProductsList');
        return cy.wrap(minPrice);     
    }); 
})


Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    cy.log('getIframeBody')
  
    return cy
    .get('.stripe_checkout_app', { log: false })
    .its('0.contentDocument.body', { log: false }).should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then((body) => cy.wrap(body, { log: false }))
  })