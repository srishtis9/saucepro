// conf.js
// var HTTPSProxyAgent = require('https-proxy-agent');
// var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")

exports.config = {
    sauceUser: process.env.srishtis9,
    sauceKey: process.env.9bd6579d-fc25-49bf-a38f-65f959d62f2b,
    // sauceAgent: sauceRestAgent,

    // webDriverProxy: 'http://<proxy>:<port>',

    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Insert Job Name Here");
    },
	jasmineNodeOpts: {
	   showColors : true ,
    defaultTimeoutInterval: 1200000
  }
}