import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PercentageComponent } from './components/percentage/percentage.component';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { TotalsumComponent } from './components/totalsum/totalsum.component';
import { CategorysumComponent } from './components/categorysum/categorysum.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { DashboaredComponent } from './components/dashboared/dashboared.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ScrollComponent } from './components/scroll/scroll.component';
//import { PercentageComponent } from './percentage/percentage.component';

const routes: Routes = [
  { path: 'percentage', component: PercentageComponent },
  { path: 'expenditure', component: ExpenditureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'total', component: TotalsumComponent },
  { path: 'categorysum', component: CategorysumComponent },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home-info', component: HomeInfoComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'dashboard', component: DashboaredComponent},
   {
     path:'',redirectTo:'layout',pathMatch:'full'
   },
  {path: 'logout', component: LogoutComponent},
  {path: 'scroll', component: ScrollComponent}




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
