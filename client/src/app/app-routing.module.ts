import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableFormComponent } from './components/AddTables/table-form.component';
import { PersonalizedQueryComponent } from './components/personalized-query/personalized-query.component';
import { AddTablesSQLComponent } from './components/add-tables-sql/add-tables-sql.component';
import { PersonalizedQuerySQLComponent } from './components/personalized-query-sql/personalized-query-sql.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: '/add',
    pathMatch: 'full'
  },
  {
    path: 'tables/add',
    component: TableFormComponent
  },
  {
    path: 'tables/personalizedQuery',
    component: PersonalizedQueryComponent
  },
  {
    path: 'tables/addsql',
    component: AddTablesSQLComponent
  },
  {
    path: 'tables/personalizedQuerysql',
    component: PersonalizedQuerySQLComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
