import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentageComponent } from './components/percentage/percentage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { LoginComponent } from './components/login/login.component';
import { TotalsumComponent } from './components/totalsum/totalsum.component';

import { CategorysumComponent } from './components/categorysum/categorysum.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeInfoComponent } from './home-info/home-info.component';
import { DashboaredComponent } from './components/dashboared/dashboared.component';
import { LayoutComponent } from './components/layout/layout.component';
import { customInterceptor } from './services/custom.interceptor';

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
    DashboaredComponent,
    LayoutComponent,


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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: customInterceptor, 
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
