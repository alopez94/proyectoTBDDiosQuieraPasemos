import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}  from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableFormComponent } from './components/AddTables/table-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonalizedQueryComponent } from './components/personalized-query/personalized-query.component';

import { TableServices } from './services/table.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListTablesComponent } from './components/list-tables/list-tables.component'

@NgModule({
  declarations: [
    AppComponent,
    TableFormComponent,
    NavigationComponent,
    PersonalizedQueryComponent,
    ListTablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    TableServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
