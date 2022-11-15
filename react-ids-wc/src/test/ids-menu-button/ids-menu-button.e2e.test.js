describe('ids-menu-button e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-menu-button');
    await page.waitForSelector('ids-menu-button');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

