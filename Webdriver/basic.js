const assert = require('assert');
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.equal(title, 'WebdriverIO . Next-gen WebDriver test framework for Node.js');

    })
});

const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        assert.equal(title, "Webdriver IO test framework for Node.js");

    });
});
