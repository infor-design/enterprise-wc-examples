describe('ids-slider e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-slider');
    await page.waitForSelector('ids-slider');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

