import { newE2EPage } from '@stencil/core/testing';

describe('jigsaw-area-segment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jigsaw-area-segment></jigsaw-area-segment>');

    const element = await page.find('jigsaw-area-segment');
    expect(element).toHaveClass('hydrated');
  });
});
