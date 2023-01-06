import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  students: any = [];  
  student: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.student = [{value: 1, tag: 'sds'}];
    this.http.get('./assets/students.json').subscribe(data => {
      console.log(data);
      this.students = data;
    })
  }
}
