import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentageComponent } from './components/percentage/percentage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { LoginComponent } from './components/login/login.component';
import { TotalsumComponent } from './components/totalsum/totalsum.component';

import { CategorysumComponent } from './components/categorysum/categorysum.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeInfoComponent } from './home-info/home-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PercentageComponent,
    ExpenditureComponent,
    LoginComponent,
    TotalsumComponent,
    CategorysumComponent,
    HomeComponent,
    RegisterComponent,
    HomeInfoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
    
  ],
  providers: [
    provideClientHydration(),provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
