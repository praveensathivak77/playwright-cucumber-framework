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

    async navigateCubeDeepSections() {
        await this.page.locator('[data-id="f59e042"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        await this.page.locator('[data-id="26b456d"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

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

        await this.page.locator('[data-id="e6d1fa4"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        await this.page.locator('[data-id="6f0e8f9"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        await this.page.locator('[data-id="622ec38"]').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);
    }

    async navigateCubeCardsSection() {

        const mainSection = this.page.locator('[data-elementor-id="2337"]');
        await mainSection.scrollIntoViewIfNeeded();

        // First card
        const card1 = this.page.locator('[data-id="dabcc99"]');
        await card1.scrollIntoViewIfNeeded();
        await card1.click();
        await this.page.waitForTimeout(2000);

        await mainSection.scrollIntoViewIfNeeded();

        // Second card
        const card2 = this.page.locator('[data-id="30045d9"]');
        await card2.scrollIntoViewIfNeeded();
        await card2.click();

        const verify2 = this.page.locator('[data-id="dc7f641"]');
        await verify2.waitFor({ state: 'visible', timeout: 10000 });

        await mainSection.scrollIntoViewIfNeeded();

        // Third card
        const card3 = this.page.locator('[data-id="361bd08"]');
        await card3.scrollIntoViewIfNeeded();
        await card3.click();

        const verify3 = this.page.locator('[data-id="cb233b0"]');
        await verify3.waitFor({ state: 'visible', timeout: 10000 });
    }

    // ✅ NEW SECTION (bb88691)
    async interactWithBbSection() {

        const section = this.page.locator('[data-id="bb88691"]');

        await section.scrollIntoViewIfNeeded();
        await expect(section).toBeVisible();

        // Click action (adjust if needed)
        await section.click();

        await this.page.waitForTimeout(2000);
    }
}

module.exports = CubePage;