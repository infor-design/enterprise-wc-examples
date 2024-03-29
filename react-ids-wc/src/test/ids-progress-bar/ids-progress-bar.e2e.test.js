describe('ids-progress-bar e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-progress-bar');
    await page.waitForSelector('ids-progress-bar');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

