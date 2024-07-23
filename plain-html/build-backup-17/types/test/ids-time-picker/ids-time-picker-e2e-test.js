import { AxePuppeteer } from '@axe-core/puppeteer';
import countObjects from '../helpers/count-objects';
describe('Ids Time Picker e2e Tests', () => {
    const url = 'http://localhost:4444/ids-time-picker/example.html';
    const axeUrl = 'http://localhost:4444/ids-time-picker/open.html';
    it('should pass Axe accessibility tests', async () => {
        await page.setBypassCSP(true);
        await page.goto(axeUrl, { waitUntil: ['networkidle2', 'load'] });
        const results = await new AxePuppeteer(page).disableRules(['aria-valid-attr']).analyze();
        // Using newer aria-description for ids-dropdown
        expect(results.violations.length).toBe(0);
    });
    it('should not have errors', async () => {
        await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
        await expect(page.title()).resolves.toMatch('IDS Time Picker Component');
    });
    it('should change value on input value change', async () => {
        // Set value to the input
        await page.$eval('#e2e-timepicker-required', (el) => el?.container.querySelector('ids-trigger-field')?.setAttribute('value', '01:00 AM'));
        let value = await page.$eval('#e2e-timepicker-required', (el) => el?.value);
        expect(value).toEqual('01:00 AM');
        // Reset value in the input
        await page.$eval('#e2e-timepicker-required', (el) => el?.container.querySelector('ids-trigger-field')?.setAttribute('value', ''));
        value = await page.$eval('#e2e-timepicker-required', (el) => el?.value);
        expect(value).toEqual('');
    });
    it.skip('setting the language will update the labels', async () => {
        await page.$eval('#e2e-timepicker-required', (el) => {
            el?.setAttribute('format', 'hh:mm:ss a');
        });
        const getLabels = async () => {
            const labels = await page.$eval('#e2e-timepicker-required', (el) => ({
                hours: el?.picker.container.querySelector('ids-dropdown#hours')?.label,
                minutes: el?.picker.container.querySelector('ids-dropdown#minutes')?.label,
                seconds: el?.picker.container.querySelector('ids-dropdown#seconds')?.label,
                period: el?.picker.container.querySelector('ids-dropdown#period')?.label
            }));
            return labels;
        };
        expect((await getLabels()).hours).toBe('Hours');
        expect((await getLabels()).minutes).toBe('Minutes');
        expect((await getLabels()).seconds).toBe('Seconds');
        expect((await getLabels()).period).toBe('Period');
        await page.evaluate(async () => {
            const container = document.querySelector('ids-container');
            if (container) {
                await container.setLocale('de-DE');
                await container.setLanguage('de');
            }
        });
        expect((await getLabels()).hours).toBe('Stunden');
        expect((await getLabels()).minutes).toBe('Minuten');
        expect((await getLabels()).seconds).toBe('Sekunden');
        expect((await getLabels()).period).toBe('Zeitraum');
    });
    it.skip('setting the locale will update the dropdowns and field', async () => {
        await page.evaluate(async () => {
            const container = document.querySelector('ids-container');
            const component = document.querySelector('#e2e-timepicker-required');
            if (container) {
                await container.setLocale('en-US');
                await container.setLanguage('en');
            }
            if (component) {
                component.format = null;
                component.open();
            }
        });
        const getDropdowns = async () => {
            const dropdowns = await page.$eval('#e2e-timepicker-required', (el) => ({
                hours: el?.picker.container.querySelector('ids-dropdown#hours')?.label,
                minutes: el?.picker.container.querySelector('ids-dropdown#minutes')?.label,
                seconds: el?.picker.container.querySelector('ids-dropdown#seconds')?.label,
                period: el?.picker.container.querySelector('ids-dropdown#period')?.label
            }));
            return dropdowns;
        };
        // h:mm a
        let thisDropdowns = await getDropdowns();
        expect(thisDropdowns.hours).toBeDefined();
        expect(thisDropdowns.minutes).toBeDefined();
        expect(thisDropdowns.seconds).not.toBeDefined();
        expect(thisDropdowns.period).toBeDefined();
        await page.evaluate(async () => {
            const container = document.querySelector('ids-container');
            if (container) {
                await container.setLocale('fr-CA');
                await container.setLanguage('fr');
            }
        });
        // 'HH:mm'
        thisDropdowns = await getDropdowns();
        expect(thisDropdowns.hours).toBeDefined();
        expect(thisDropdowns.minutes).toBeDefined();
        expect(thisDropdowns.seconds).not.toBeDefined();
        expect(thisDropdowns.period).not.toBeDefined();
        // custom hh:mm:ss a
        await page.$eval('#e2e-timepicker-required', (el) => {
            el?.setAttribute('format', 'hh:mm:ss a');
        });
        thisDropdowns = await getDropdowns();
        expect(thisDropdowns.hours).toBeDefined();
        expect(thisDropdowns.minutes).toBeDefined();
        expect(thisDropdowns.seconds).toBeDefined();
        expect(thisDropdowns.period).toBeDefined();
    });
    it.skip('should not have memory leaks', async () => {
        const numberOfObjects = await countObjects(page);
        await page.evaluate(() => {
            const template = `
        <ids-time-picker id="test" format="hh:mm" value="12:00"></ids-time-picker>
      `;
            document.body.insertAdjacentHTML('beforeend', template);
            document.querySelector('#test')?.remove();
        });
        expect(await countObjects(page)).toEqual(numberOfObjects);
    });
});
//# sourceMappingURL=ids-time-picker-e2e-test.js.map