import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'combo-box',
  styleUrl: 'combo-box.css',
  shadow: true,
})
export class ComboBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
