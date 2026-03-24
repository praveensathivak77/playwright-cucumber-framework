const testData = require('../utils/testData');
const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.popupCloseBtn = '.sgpb-popup-close-button-3';
        this.homeSections = ['c0b5f05','ea26d4f','41025fb','24f5f40','61d19d6','dd99a43','7b9b34c','078e615','b2da726','f33be56'];

        // About Us button
        this.aboutUsButton = this.page.locator('a.elementor-button-link',{ hasText: 'About Us' });

        // About page sections
        this.aboutSections = ['9000c4a','951e6a1','cdc542c','0600be7'];

        // LinkedIn profile data-ids
        this.linkedInProfiles = [
            'cd0e70c',
            'addb3b2',
            '3ee77c2',
            'd2efaf8',
            '7110c66',
            'aba6116',
            'c0994bb',
            '0cd4b69'
        ];

        this.targetSection = this.page.locator('[data-id="09ef7d4"]');
        this.menuItem = this.page.locator('#menu-item-123');
    }

    async visit() {
        await this.page.goto(testData.url, {
            waitUntil: 'domcontentloaded'
        });
        await this.closePopupIfPresent();
    }

    async closePopupIfPresent() {
        const popup = this.page.locator(this.popupCloseBtn);
        try {
            await popup.click({ timeout: 5000 });
        } catch {}
    }

    async scrollThroughAllSections() {
        for (const id of this.homeSections) {
            const section = this.page.locator(`[data-id="${id}"]`);
            await section.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(1000);
        }
    }

    async clickAboutUsButton() {
        await this.aboutUsButton.scrollIntoViewIfNeeded();
        await expect(this.aboutUsButton).toBeVisible();
        await this.aboutUsButton.click();
        await this.page.waitForTimeout(3000);
    }

    async navigateAboutSections() {

        for (const id of this.aboutSections) {
            const section = this.page.locator(`[data-id="${id}"]`);
            await section.scrollIntoViewIfNeeded();
            await expect(section).toBeVisible();
            await this.page.waitForTimeout(1000);
        }

        for (const id of this.linkedInProfiles) {

            const linkedInLink = this.page.locator(`[data-id="${id}"] a`);

            await linkedInLink.scrollIntoViewIfNeeded();
            await expect(linkedInLink).toBeVisible();

            try {

                const [newPage] = await Promise.all([
                    this.page.context().waitForEvent('page', { timeout: 5000 }),
                    linkedInLink.click()
                ]);

                await newPage.waitForTimeout(2000);
                await newPage.close();

                await this.page.bringToFront();
                await this.page.waitForTimeout(500);

            } catch (error) {

                await linkedInLink.click();

            }
        }
    }

    async verifyTargetSectionVisible() {
        await this.targetSection.scrollIntoViewIfNeeded();
        await expect(this.targetSection).toBeVisible();
    }
}

module.exports = HomePage;