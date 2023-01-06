import { newSpecPage } from '@stencil/core/testing';
import { ZCombobox } from '../z-combobox';

describe('z-combobox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox></z-combobox>`,
    });
    expect(page.root).toEqualHtml(`
      <z-combobox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-combobox>
    `);
  });
});
