import { newE2EPage } from '@stencil/core/testing';

describe('x-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-modal></x-modal>');

    const element = await page.find('x-modal');
    expect(element).toHaveClass('hydrated');
  });
});
