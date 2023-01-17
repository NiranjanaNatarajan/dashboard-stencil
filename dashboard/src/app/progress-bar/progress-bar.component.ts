import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  _formBuilder: FormBuilder = new FormBuilder();
  // _formBuilder: FormBuilder;
  constructor() { }
  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  color1: ThemePalette = 'primary';
  mode1: ProgressSpinnerMode = 'determinate';
  value1 = 50;
  ngOnInit(): void {
  }
  @Input()
  mode: ProgressBarMode = 'determinate';
  @Input()
  value: number = 40;
  @Input()
  bufferValue: number = 60;
  @Input()
  color: ThemePalette = 'primary';

}
