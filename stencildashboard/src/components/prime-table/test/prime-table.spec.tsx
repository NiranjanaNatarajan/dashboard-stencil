import { newSpecPage } from '@stencil/core/testing';
import { PrimeTable } from '../prime-table';

describe('prime-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PrimeTable],
      html: `<prime-table></prime-table>`,
    });
    expect(page.root).toEqualHtml(`
      <prime-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </prime-table>
    `);
  });
});
