import { newSpecPage } from '@stencil/core/testing';
import { JigsawManager } from '../jigsaw-manager';

describe('jigsaw-manager', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JigsawManager],
      html: `<jigsaw-manager></jigsaw-manager>`,
    });
    expect(page.root).toEqualHtml(`
      <jigsaw-manager>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jigsaw-manager>
    `);
  });
});
