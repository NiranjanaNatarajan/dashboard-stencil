import { newSpecPage } from '@stencil/core/testing';
import { ChartsDthree } from '../charts-dthree';

describe('charts-dthree', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChartsDthree],
      html: `<charts-dthree></charts-dthree>`,
    });
    expect(page.root).toEqualHtml(`
      <charts-dthree>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </charts-dthree>
    `);
  });
});
