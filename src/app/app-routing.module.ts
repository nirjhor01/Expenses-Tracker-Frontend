import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PercentageComponent } from './components/percentage/percentage.component';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { LastexpenseComponent } from './components/lastexpense/lastexpense.component';
//import { PercentageComponent } from './percentage/percentage.component';

const routes: Routes = [
  { path: '', component: PercentageComponent },
  { path: 'percentage', component: PercentageComponent },
  { path: 'expenditure', component: ExpenditureComponent },
  { path: 'expenditure', component: LastexpenseComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
