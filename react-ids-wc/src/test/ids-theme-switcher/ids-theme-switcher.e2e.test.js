describe('ids-theme-switcher e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-theme-switcher');
    await page.waitForSelector('ids-theme-switcher');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

