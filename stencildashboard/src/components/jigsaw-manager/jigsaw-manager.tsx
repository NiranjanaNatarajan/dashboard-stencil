import { Component, getAssetPath, Host, h, State } from '@stencil/core';
import Sortable from 'sortablejs';
@Component({
  tag: 'jigsaw-manager',
  styleUrl: 'jigsaw-manager.css',
  scoped: true,
  assetsDirs: ['../../assets']
})
export class JigsawManager {
  private jigsaw: HTMLElement;
  @State() squares: Array<{ id: number, src: string }> = [
    {
      id: 1,
      src: getAssetPath('../../assets/images/tile-1.png')
    },
    {
      id: 2,
      src: getAssetPath('../../assets/images/tile-2.png')
    },
    {
      id: 3,
      src: getAssetPath('../../assets/images/tile-3.png')
    },
    {
      id: 4,
      src: getAssetPath('../../assets/images/tile-4.png')
    }
  ];
  componentWillLoad() {
    this.scrambleJigsaw();
  }
  componentDidLoad() {
    this.init();
  }
  private init(): void {
    Sortable.create(this.jigsaw, {
      animation: 150
    });
  }
  private randomSort(): number {
    return Math.random() - 0.75;
  }
  private scrambleJigsaw(): void {
    this.squares.sort(this.randomSort);
  }
  private scramble(): void {
    this.scrambleJigsaw();
    this.squares = [...this.squares];
  }
  render() {
    return (
      <Host>
        <div class="container">
          <div class="container__jigsaw" ref={(el) => this.jigsaw = el as HTMLElement}>
            {this.squares.map((square: any) =>
              <jigsaw-area-segment class="jigsaw__segment" tileImage={square.src}></jigsaw-area-segment>
            )}
          </div>
          <div class="container__controls">
            <h1>drag{' & '}drop</h1>
            <button
              class="controls__button"
              type="button"
              onClick={() => this.scramble()}>disorder</button>
          </div>
        </div>
      </Host>
    );
  }
}