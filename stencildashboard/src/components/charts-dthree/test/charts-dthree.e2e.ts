import { newE2EPage } from '@stencil/core/testing';

describe('charts-dthree', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<charts-dthree></charts-dthree>');

    const element = await page.find('charts-dthree');
    expect(element).toHaveClass('hydrated');
  });
});
