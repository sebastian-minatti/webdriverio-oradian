var Page = require('./page');

/**
* define elements
*/

const selectors = {
    usernameInput: '//*[@name="username"]',
    passwordInput : '//*[@name="password"]',
    loginButton : '//button[contains(., "Sign in")]'
}


var LoginPage = Object.create( Page, {

    /**
    * define elements
    */
    usernameInput: { get: function() { return $('//*[@name="username"]'); } },
    passwordInput: { get: function() { return $('//*[@name="password"]'); } }, 
    loginButton: { get: function() { return '//button[contains(., "Sign in")]'; } }, 
    open: {
        value: function () {
            return this.browser.url('https://demo.instafin.net/user/login');
        }
    },
    login: {
        value: function(username, password){ 
            this.browser.waitForVisible(selectors.loginButton, 16000)
            this.browser.setValue('[name="username"]', username);
            this.browser.setValue('[name="password"]', password);
            this.browser.click(selectors.loginButton);                                
            return ;    
        }
    },
    url: {
        value: function(){
            return this.browser.getUrl();
        }
    } 
});

module.exports = LoginPage;