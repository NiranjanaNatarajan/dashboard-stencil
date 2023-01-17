import { Component, h, Prop, Event } from '@stencil/core';
import { JSX, EventEmitter } from '@stencil/core/internal/stencil-public-runtime';

@Component({
  tag: 'x-modal',
  styleUrl: 'x-modal.css',
  shadow: true,
})
export class XModal {
  @Prop() title: string = '';
  @Prop({ mutable: true, reflect: true }) visible: boolean;
  @Event() ok: EventEmitter;
  @Event() cancel: EventEmitter;

  handleCancelClick = () => {
    this.visible = false;
    this.cancel.emit();
  };

  handleOkClick = () => {
    this.visible = false;
    this.ok.emit();
  };
  render(): JSX.Element {
    return (
      <div class={this.visible ? "wrapper visible" : "wrapper"}>
        <div class="modal">
          <span class="title">{this.title}</span>
          <div class="content">We need to add some content here</div>
          <div class="button-container">
            <button class="cancel" onClick={this.handleCancelClick}>Cancel</button>
            <button class="ok" onClick={this.handleOkClick}>Okay</button>
          </div>
        </div>
      </div>
    );
  }

}
