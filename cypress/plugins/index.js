/// <reference types="cypress" />

import './commands'
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};
