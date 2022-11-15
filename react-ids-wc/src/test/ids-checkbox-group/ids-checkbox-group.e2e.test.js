describe('ids-checkbox-group e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-checkbox-group');
    await page.waitForSelector('ids-checkbox-group');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
