describe('ids-breadcrumb e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-breadcrumb');
    await page.waitForSelector('ids-breadcrumb');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

