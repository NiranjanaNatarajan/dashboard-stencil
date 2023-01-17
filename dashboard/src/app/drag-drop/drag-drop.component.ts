import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
@Input() header: any;
@Input() header1: any;
@Input() color: any;

}
