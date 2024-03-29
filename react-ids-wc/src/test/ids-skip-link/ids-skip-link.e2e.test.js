describe('ids-skip-link e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-skip-link');
    await page.waitForSelector('ids-skip-link');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

