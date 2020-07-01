import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../models/table'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class retrieveProperties {


  API_URI = 'http://localhost:3000/api';

  constructor(private https: HttpClient) { }

 //SQL
  GetTableVariablesSQL(){

    return this.https.get(`${this.API_URI}/getVariablesSQL`);
  }

  GetTableNamesSQL(){

    return this.https.get(`${this.API_URI}/getTablesNamesSQL`);
  }

//MySQL
  GetTableVariables(){


    
    return;
  }
  GetTableNames(){
    return this.https.get(`${this.API_URI}/tableNames`);
    
  }

}
