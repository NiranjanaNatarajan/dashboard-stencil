import { newE2EPage } from '@stencil/core/testing';

describe('jigsaw-manager', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jigsaw-manager></jigsaw-manager>');

    const element = await page.find('jigsaw-manager');
    expect(element).toHaveClass('hydrated');
  });
});
