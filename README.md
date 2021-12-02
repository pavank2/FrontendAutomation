# Cypress Automation Suite

## Summary

- The project has been implemented using Cypress Javascript Framework with Chai and Mocha Awesome supporting libraries.
- Page Object Model (POM) design pattern has been used to implement the project.

## Scenarios

There is one E2E scenario as part of 1 spec file.
This E2E test does the following:
      1) Navigate to the right page based on current temperature
      2) Select two cheapest products for our required category and add to cart
      3) Assert selected products are displayed on the checkpage
      4) Assert total price displayed is correct
      5) Complete the payment
      6) Assert payment success. Test fails if payment has failed
 
## Configuration
- node.js 16.10.0
- npm 8.1.3

## Instructions to execute the Automation Suite

1. On a NEW terminal, clone the Automation project to your local machine

   - git clone https://github.com/pavank2/CypressAutomation.git

2. Navigate to the Project folder and install the dependencies (already part of package.json)

   - cd CypressAutomation
   - npm init (Go with the default values)
   - npm install (Installs cypress and other libraries)

3. Run the tests! First time execution might take a little longer to start.

   - npx cypress open (Opens the GUI where you can select the browser and see the execution)
   - Click on the spec file in the GUI to start run
    OR
   - npm run cy:run:<browserName> (electron|chrome|edge)
    Eg: npm run cy:run:electron

   Note of Caution: Test does not complete in Firefox because of Firefox CORS limitation with iFrames 

4. HTML report of the latest execution can be seen at {PROJECT_HOME}/reports/index.html

If something doesn't work, please feel free to contact me :-)
