describe('ids-loading-indicator e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-loading-indicator');
    await page.waitForSelector('ids-loading-indicator');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

