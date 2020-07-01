import { Component, OnInit, HostBinding } from '@angular/core';
import { Table } from 'src/app/models/table';
import { TableServices } from '../../services/table.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  cols: string[] =[];
  variables: any[] = ["varchar(200)","int", "double"];

  tables: Table = {
    id: 0,
    Name: '',
    column: this.cols,
    created_at: new Date()
  };



  constructor(private tableService: TableServices) { 
    
  }

  ngOnInit(): void {

  }

  addColumnstoPreview(columnName,columnType){
   
    var str1 = new String(columnName.value);
    var str2 = new String(columnType.value);
    let concat = str1.concat(" ",str2.toString());
    this.cols.push(concat);
    columnName.value = '';
    columnType.value = '';

    console.log(this.cols);

  }

  deleteColumn(columnName,columnType){
    
    var str1 = new String(columnName.value);
    var str2 = new String(columnType.value);
    let concat = str1.concat(": ",str2.toString());

    for(let i = 0; i < this.cols.length; i++){
      if(concat = this.cols[i]){
        this.cols.splice(i,1);
      }
    }
  }

//clase para probar xD
 
dropdownselection(columntype){

  columntype.value = 'prueba';
}
   

  saveNewtable(){

    delete this.tables.created_at;
    delete this.tables.id;
    let SQL = "CREATE TABLE projectotbd.";
    let nametable1 = this.tables.Name;
    let query1 = SQL.concat(nametable1.toString()," ","(",this.cols.toString(),");");

    this.tableService.addviaTableQuery(query1)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )

    console.log(query1);
  }

  
  
  

  

}


