describe('ids-about e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-about');
    await page.waitForSelector('ids-about');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });

  it('trigger should open modal', async () => {
    await page.click('ids-button');
    const visible = await page.$eval('ids-about', element => element.visible);

    expect(visible).toBeTruthy();
  });
});
