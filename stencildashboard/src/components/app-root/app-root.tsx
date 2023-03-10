import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Product List</h1>
        </header>

        <main>
          <to-do-card-list></to-do-card-list>
        </main>
      </div>
    );
  }
}
