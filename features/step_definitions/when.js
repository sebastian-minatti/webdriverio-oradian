/*
 * When Steps
 */

const assert = require('assert');

module.exports = function () {

	// *** belongs to loging  feature
    this.When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(username, password) {        
        return this.loginPage.login(username, password);
    });

}