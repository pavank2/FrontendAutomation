/// <reference types="Cypress"/>
import HomePage from '../../support/pages/HomePage'
import ProductPage from '../../support/pages/ProductPage'
import CheckoutPage from '../../support/pages/CheckoutPage'
import ConfirmationPage from '../../support/pages/ConfirmationPage'

describe('Tests for Customer Details Page', function(){

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })

    /**
     * This E2E test does the following:
     * 1) Navigate to the right page based on current temperature
     * 2) Select two cheapest products for our required category and add to cart
     * 3) Assert selected products are displayed on the checkpage
     * 4) Assert total price displayed is correct
     * 5) Complete the payment
     * 6) Assert payment success. Test fails if payment has failed
     */
    it ('E2E Test for shopping', function(){
        const homePage=new HomePage();
        const productPage = new ProductPage();
        const checkoutPage = new CheckoutPage();
        const confirmationPage = new ConfirmationPage();
       
        cy.visit(this.data.url);
        homePage.navigateToCorrectPage();
        //Get the correct Page details from previous function
        cy.get('@productCategory').then(function(productCategory){
         productPage.selectMinPriceProducts(productCategory);
        });

        productPage.checkOutToCart();
        checkoutPage.getProductsonCheckoutPage();
        checkoutPage.getAmountOnCheckoutPage();

        // Verify selected Products list from Products Page and products on Checkout page are same
        cy.get('@selectedProductsList').then(function(selectedProductsList){
            cy.get('@productsOnCheckoutPage').then(function(productsOnCheckoutPage){
                expect(selectedProductsList).to.have.members(productsOnCheckoutPage); 
            }); 
        });  
       
       //Verify total Price calculated while selecting products is same as total price on Checkout Page 
       cy.get('@totalPrice').then(function(totalPrice){
            cy.get('@amountOnCheckoutPage').then(function(amountOnCheckoutPage){
                expect(totalPrice).to.equal(Number(amountOnCheckoutPage));
            });
       });
      
      checkoutPage.makePayment(this.data.cardDetails);
      confirmationPage.getPaymentconfirmationMsg();

      //Verify Payment success message
      cy.get('@confirmationMsg').then(function(confirmationMsg){
            expect(confirmationMsg).to.equal('PAYMENT SUCCESS');
       });

    })
})