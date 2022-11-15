describe('ids-progress-chart e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-progress-chart');
    await page.waitForSelector('ids-progress-chart');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

