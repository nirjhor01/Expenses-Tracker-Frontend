import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentageComponent } from './components/percentage/percentage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { LoginComponent } from './components/login/login.component';
import { LastexpenseComponent } from './components/lastexpense/lastexpense.component';


@NgModule({
  declarations: [
    AppComponent,
    PercentageComponent,
    ExpenditureComponent,
    LoginComponent,
    LastexpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
