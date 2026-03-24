const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const HomePage = require('../pages/HomePage');
const EdgePage = require('../pages/EdgePage');

setDefaultTimeout(60000);

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

Given('User opens Cubera homepage', async function () {
    this.homePage = new HomePage(this.page);
    await this.homePage.visit();
});

When('User scrolls through all sections', async function () {
    await this.homePage.scrollThroughAllSections();
});

When('User clicks About Us button', async function () {
    await this.homePage.clickAboutUsButton();
});

When('User navigates About Us sections', async function () {
    await this.homePage.navigateAboutSections();
});

Then('Target section should be visible', async function () {
    await this.homePage.verifyTargetSectionVisible();
});

After(async function () {
    await this.browser.close();
});