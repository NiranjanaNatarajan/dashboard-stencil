import { newSpecPage } from '@stencil/core/testing';
import { XModal } from '../x-modal';

describe('x-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XModal],
      html: `<x-modal></x-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <x-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-modal>
    `);
  });
});
