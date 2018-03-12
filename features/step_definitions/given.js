/*
 * Given Steps
 */
 
const assert = require('assert');

module.exports = function () {

   // *** belongs to loging  feature  	
   this.Given(/^I am on login page$/, function() {            
       return this.loginPage.open();    // navigating to login page
   });

}