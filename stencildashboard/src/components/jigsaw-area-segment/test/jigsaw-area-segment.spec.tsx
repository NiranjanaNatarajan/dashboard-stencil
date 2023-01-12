import { newSpecPage } from '@stencil/core/testing';
import { JigsawAreaSegment } from '../jigsaw-area-segment';

describe('jigsaw-area-segment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JigsawAreaSegment],
      html: `<jigsaw-area-segment></jigsaw-area-segment>`,
    });
    expect(page.root).toEqualHtml(`
      <jigsaw-area-segment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jigsaw-area-segment>
    `);
  });
});
