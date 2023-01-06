import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  @Input() products: any = [];  
  @Input() header: string = '';  
  @Input() color: string = '';  
  // constructor(private http: HttpClient) {}

  ngOnInit(){
    // // this.student = [{value: 1, tag: 'sds'}];
    // this.http.get('./assets/products.json').subscribe(data => {
    //   console.log(data);
    //   this.products = data;
    // });

    // this.http.get<any>('assets/products.json')
    //     .toPromise()
    //     .then(res => <any[]>res.data)
    //     .then(data => { return data; }).then(data => this.products = data);

  }
}
