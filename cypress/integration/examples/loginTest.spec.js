/// <reference types="Cypress"/>
import LandingPage from '../../support/pages/LandingPage'
import HomePage from '../../support/pages/HomePage'


describe('Tests for login functionality', function(){
   
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
            cy.visit(this.data.url);
        })      
    })

    
    it ('Login Test with correct credentials', function(){
        const landingPage=new LandingPage();
        const homePage = new HomePage();
        landingPage.login(this.data.user,this.data.password);
        homePage.getLoginUsername(this.data.user);
        cy.get('@email').then(function(email){
            expect(email).to.equal(this.data.user); 
        }); 
    })

    it ('Login Test with incorrect credentials', function(){
        const landingPage=new LandingPage();
        const homePage = new HomePage();
        landingPage.login(this.data.user,this.data.wrongpassword);
        landingPage.getLoginErrorMsg();
        cy.get('@errorMsg').then(function(errorMsg){
            expect(errorMsg).to.contain('E-Mail-Adresse oder Passwort nicht zu stimmen'); 
        }); 
    })
})