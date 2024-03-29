describe('ids-lookup e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-lookup');
    await page.waitForSelector('ids-lookup');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
