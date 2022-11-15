describe('ids-checkbox e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-checkbox');
    await page.waitForSelector('ids-checkbox');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });

  it('should have labels visible', async () => {
    const label = await page.$eval(
      'ids-checkbox[label="Checked"]',
      element => element.shadowRoot.querySelector('ids-text').textContent
    );

    expect(label).not.toBe('');
  });

  it('should have checked visible', async () => {
    const checked = await page.$eval(
      'ids-checkbox[label="Checked"]',
      element => element.shadowRoot.querySelector('input[type="checkbox"]').checked
    );

    expect(checked).toBeTruthy();
  });

  it('trigger buttons should toggle indeterminate ', async () => {
    await page.click('ids-button[type="secondary"]');
    let indeterminate = await page.$eval(
      'ids-checkbox[label="Indeterminate"]',
      element => element.shadowRoot.querySelector('input[type="checkbox"]').classList.contains('indeterminate')
    );

    expect(indeterminate).toBeFalsy();

    await page.click('ids-button[type="primary"]');
    indeterminate = await page.$eval(
      'ids-checkbox[label="Indeterminate"]',
      element => element.shadowRoot.querySelector('input[type="checkbox"]').classList.contains('indeterminate')
    );

    expect(indeterminate).toBeTruthy();
  });
});
