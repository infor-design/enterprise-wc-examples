describe('ids-button e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-button');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });

  it('onClick event should change button text', async () => {
    await page.click('ids-button[type="primary"]');
    const clicked = await page.$eval('ids-button[type="primary"]', element => element.text === 'Clicked');

    expect(clicked).toBeTruthy();
  });

  it('manually attached event should change button text', async () => {
    await page.click('ids-button[type="secondary"]');
    const clicked = await page.$eval('ids-button[type="secondary"]', element => element.text === 'Clicked');

    expect(clicked).toBeTruthy();
  });
});

