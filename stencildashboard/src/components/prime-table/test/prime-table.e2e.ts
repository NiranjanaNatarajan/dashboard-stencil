import { newE2EPage } from '@stencil/core/testing';

describe('prime-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<prime-table></prime-table>');

    const element = await page.find('prime-table');
    expect(element).toHaveClass('hydrated');
  });
});
