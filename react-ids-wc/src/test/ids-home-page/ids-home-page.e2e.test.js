describe('ids-home-page e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-home-page');
    await page.waitForSelector('ids-home-page');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
