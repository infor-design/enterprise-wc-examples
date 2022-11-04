describe('ids-multiselect.e2e.test', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-multiselect');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
