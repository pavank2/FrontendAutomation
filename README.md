# Cypress Automation Suite

## Summary

- The project has been implemented using Cypress Javascript Framework with Chai and Mochawesome supporting libraries.
- Functions for each Page of the UI are located in "cypress/support/pages path.
- Reports are generated in "cypress/reports" directory
 


## Scenarios

Two tests have been automated as part of 1 spec file  
1) Successful Login  
2) Unsuccessful login


## Instructions to execute the Automation Suite

1. On a NEW terminal, clone the Automation project to your local machine

   - **git clone https://github.com/pavank2/FrontendAutomation.git**

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

4. HTML report of the latest execution can be seen at {PROJECT_HOME}/cypress/reports/mochawesome.html

If something doesn't work, please feel free to contact me :-)
