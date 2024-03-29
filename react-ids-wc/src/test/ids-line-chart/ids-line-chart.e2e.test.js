describe('ids-line-chart e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-line-chart');
    await page.waitForSelector('ids-line-chart');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
