import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { TablesComponent } from './tables/tables.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
{path: 'comboBox', component: ComboBoxComponent},
{path: 'charts', component: ChartsComponent},
{path: 'tables', component: TablesComponent},
{path: 'calender', component: CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
