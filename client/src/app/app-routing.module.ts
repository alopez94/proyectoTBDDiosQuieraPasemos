import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableFormComponent } from './components/AddTables/table-form.component';
import { PersonalizedQueryComponent } from './components/personalized-query/personalized-query.component';
import { ListTablesComponent } from './components/list-tables/list-tables.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/tables',
    pathMatch: 'full'
  },
  {
    path: 'tables',
    component: ListTablesComponent

  },
  {
    path: 'tables/add',
    component: TableFormComponent
  },
  {
    path: 'tables/personalizedQuery',
    component: PersonalizedQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
