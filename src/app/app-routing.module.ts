import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PercentageComponent } from './components/percentage/percentage.component';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { TotalsumComponent } from './components/totalsum/totalsum.component';
import { CategorysumComponent } from './components/categorysum/categorysum.component';
//import { PercentageComponent } from './percentage/percentage.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'percentage', component: PercentageComponent },
  { path: 'expenditure', component: ExpenditureComponent },
  { path: 'login', component: LoginComponent},
  { path: 'total', component: TotalsumComponent },
  { path: 'categorysum', component: CategorysumComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
