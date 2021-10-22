describe('ids-accordion e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-accordion');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });

  it('trigger should expand all accordion panels', async () => {
    await page.click('ids-button');
    const expanded = await page.$$eval('ids-accordion-panel', list => {
      let elExpanded = []

      for(let entry of list.values()) {
        elExpanded.push(entry.expanded === 'true')
      }

      return elExpanded.every((item) => item)
    });

    expect(expanded).toBeTruthy();
  });
});

