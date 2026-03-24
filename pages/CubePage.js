const { expect } = require('@playwright/test');

class CubePage {
    constructor(page) {
        this.page = page;

        this.heading = this.page.locator('h1');
        this.cubeButton = this.page.locator('[data-id="936e344"]');
        this.resultSection = this.page.locator('[data-id="2449f7f"]');
    }

    async verifyCubePage() {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL(/cube/);
        await expect(this.heading).toBeVisible();
    }

    async clickCubeSection() {
        await this.cubeButton.scrollIntoViewIfNeeded();
        await this.cubeButton.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyCubeResult() {
        await this.resultSection.scrollIntoViewIfNeeded();
        await expect(this.resultSection).toBeVisible();
    }

    // ✅ NEW METHOD (your deep navigation)
    async navigateCubeDeepSections() {

        // Scroll
        await this.page.locator('[data-id="f59e042"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        await this.page.locator('[data-id="26b456d"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        // Hover
        const hover1 = this.page.locator('[data-id="81a81a1"]');
        await hover1.scrollIntoViewIfNeeded();
        await hover1.hover();
        await this.page.waitForTimeout(1000);

        const hover2 = this.page.locator('[data-id="4ca228c"]');
        await hover2.scrollIntoViewIfNeeded();
        await hover2.hover();
        await this.page.waitForTimeout(1000);

        const hover3 = this.page.locator('[data-id="3d7f3fe"]');
        await hover3.scrollIntoViewIfNeeded();
        await hover3.hover();
        await this.page.waitForTimeout(1000);

        const hover4 = this.page.locator('[data-id="a8f7caa"]');
        await hover4.scrollIntoViewIfNeeded();
        await hover4.hover();
        await this.page.waitForTimeout(1000);

        // Scroll again
        await this.page.locator('[data-id="e6d1fa4"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        await this.page.locator('[data-id="6f0e8f9"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        await this.page.locator('[data-id="622ec38"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);
    }
}

module.exports = CubePage;