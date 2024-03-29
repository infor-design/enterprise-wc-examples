describe('ids-data-grid e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-data-grid');
    await page.waitForSelector('ids-data-grid');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

