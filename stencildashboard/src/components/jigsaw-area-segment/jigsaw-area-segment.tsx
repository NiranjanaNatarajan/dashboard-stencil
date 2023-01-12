import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'jigsaw-area-segment',
  styleUrl: 'jigsaw-area-segment.css',
  shadow: true,
})
export class JigsawAreaSegment {
  @Prop() tileImage: string;
  render() {
    return (
      <Host>
        <img src={this.tileImage} />
      </Host>
    );
  }
}