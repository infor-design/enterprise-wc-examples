describe('ids-toggle-button e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-toggle-button');
    await page.waitForSelector('ids-toggle-button');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

