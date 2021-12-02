# Cypress Automation Suite

## Summary

- The project has been implemented using Cypress Javascript Framework with Chai and Mochawesome supporting libraries.
- The project uses the standard Cypress Framework and utilities like Fixtures, Plugins, Custom commands, aliases
- Functions for each Page of the UI are in support/pages
- Reports are generated in "reports" directory
 
## Highlights

- The project will execute on multiple browsers - Electron,Chrome,Edge.
- The project is independent of any OS
- Tests can be executed in parallel in Cypress using "cypress run --record --key=$key --parallel" 

## Scenarios

There is one E2E scenario as part of 1 spec file.
This E2E test does the following:
  1) Navigate to the right page based on current temperature    
  2) Select two cheapest products for our required category and add to cart    
  3) Assert selected products displayed on the checkout page match the selected products    
  4) Assert total price displayed on the checkoutPage matches the actual total price      
  5) Complete the payment    
  6) Assert payment success. Test fails if payment has failed    


## Instructions to execute the Automation Suite

1. On a NEW terminal, clone the Automation project to your local machine

   - **git clone https://github.com/pavank2/CypressAutomation.git**

2. Navigate to the Project folder and install the dependencies (already part of package.json)

   - **cd CypressAutomation**
   - **npm init** (Go with the default values)
   - **npm install** (Installs cypress and other libraries)

3. Run the tests! First time execution might take a little longer to start.

   - **npx cypress open** (Opens the GUI where you can select the browser and see the execution)
   - Click on the spec file in the GUI to start run
    OR
   - **npm run tests** (Runs test in Cypress native electron browser in headed mode)
   OR
   - **npm run tests:chrome**
   OR
    - **npm run tests:edge**
    
   Note: Test does not complete in Firefox because of Firefox CORS limitation with iFrames 

4. HTML report of the latest execution can be seen at {PROJECT_HOME}/reports/index.html

If something doesn't work, please feel free to contact me :-)
