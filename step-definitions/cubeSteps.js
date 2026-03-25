const { When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const CubePage = require('../pages/CubePage');

When('User clicks Cube menu', async function () {
    this.homePage = new HomePage(this.page);
    await this.homePage.clickCubeMenu();
});

Then('Cube page should be visible', async function () {
    this.cubePage = new CubePage(this.page);
    await this.cubePage.verifyCubePage();
});

When('User clicks cube section', async function () {
    await this.cubePage.clickCubeSection();
});

Then('Cube result section should be visible', async function () {
    await this.cubePage.verifyCubeResult();
});

When('User navigates deep cube sections', async function () {
    await this.cubePage.navigateCubeDeepSections();
});

When('User interacts with bb section', async function () {
    await this.cubePage.interactWithBbSection();
});