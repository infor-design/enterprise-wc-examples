describe('ids-data-label e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-data-label');
    await page.waitForSelector('ids-data-label');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
