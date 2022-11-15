describe('ids-expandable-area e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-expandable-area');
    await page.waitForSelector('ids-expandable-area');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});

