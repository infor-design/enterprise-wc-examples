describe('ids-step-chart e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-step-chart');
    await page.waitForSelector('ids-step-chart');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

