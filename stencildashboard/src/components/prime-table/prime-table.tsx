import { Component, Host, h, Prop } from '@stencil/core';
// import {TableModule} from 'primeng/table';
// import { ButtonModule } from 'primeng/button';

@Component({
  tag: 'prime-table',
  styleUrl: 'prime-table.css',
  shadow: true,
})
export class PrimeTable {
  @Prop() lists: string = '[]';
  public list: any;
  constructor() {
    this.list = JSON.parse(this.lists)
  }
  render() {

    console.log(this.list, 'sdsd');
    return (
      <Host>
        <slot>
          <h3><b>Products :</b></h3>
          <table>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Code</th>
            </tr>
            {this.list.map((item: any = {}) =>
              <tr>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.code}</td>
              </tr>
            )}
          </table>
        </slot>
      </Host>
    );
  }

}
