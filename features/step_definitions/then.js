/*
 * Then Steps
 */
 
const assert = require('assert');

module.exports = function () {

   // *** belongs to loging  feature 
   this.Then(/^I should see my name "([^"]*)" on account section$/, function(expectedTitle) {
       return this.loginPage.url()
            .then(
                function (actualUrl) {
                    assert.equal(actualUrl, expectedTitle);
                }
            );
    });  
}