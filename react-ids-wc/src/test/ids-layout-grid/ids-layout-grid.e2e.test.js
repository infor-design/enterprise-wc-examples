describe('Ids Layout Grid e2e tests', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/ids-layout-grid');
  });

  it('renders auto setting', async () => {
    const hasClass = await page.$eval(
      'ids-layout-grid[auto="true"]',
      e => e.classList.contains('ids-layout-grid-auto')
    );

    expect(hasClass).toBeTruthy();
  });
});
