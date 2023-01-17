import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { TablesComponent } from './tables/tables.component';
import { CalenderComponent } from './calender/calender.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
{path: 'comboBox', component: DragDropComponent},
{path: 'charts', component: ChartsComponent},
{path: 'tables', component: TablesComponent},
{path: 'calender', component: CalenderComponent},
{path: 'progress', component: ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
