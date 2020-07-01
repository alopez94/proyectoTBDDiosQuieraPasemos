import { Component, OnInit, HostBinding } from '@angular/core';
import { Table } from 'src/app/models/table';
import { TableServices } from '../../services/table.service';
import { stringify } from 'querystring';
import { retrieveProperties } from '../../services/retrieveProperties.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-add-tables-sql',
  templateUrl: './add-tables-sql.component.html',
  styleUrls: ['./add-tables-sql.component.css']
})
export class AddTablesSQLComponent implements OnInit {

 
  @HostBinding('class') classes = 'row';

 
  cols: string[] = [];
  variables: any;
  tablenames: any;
  culumnaSeleccionada = {name: ''};
  NombreTablaSeleccionada:string[];
  tables: Table = {
    id: 0,
    Name: '',
    column: this.cols,
    created_at: new Date()
  };



  constructor(private tableService: TableServices, private retrieveData: retrieveProperties) {

  }


  ngOnInit(): void {
    this.getVariables();
    this.getTablesNames();
  }

  
  addColumnstoPreview(columnName, columnType, varsize) {

    var str1 = new String(columnName.value);
    var str2 = new String(columnType.value);
    var str3 = new String(varsize.value);
    var concat;
    if(str3!=''){
    concat = str1.concat(" ", str2.toString()," ","(", str3.toString(),")");
    }
    else{
    concat = str1.concat(" ", str2.toString());
    }
    
    this.cols.push(concat);
    columnName.value = '';
    columnType.value = '';
    varsize.value = '';

    console.log(this.cols);

  }



  deleteColumn(columnName, columnType, varsize) {

    var str1 = new String(columnName.value);
    var str2 = new String(columnType.value);
    var str3 = new String(varsize.value);
    let concat = str1.concat(" ", str2.toString()," ","(", str3.toString(),")");

    for (let i = 0; i < this.cols.length; i++) {
      if (concat = this.cols[i]) {
        this.cols.splice(i, 1);
      }
    }
  }

  //clase para probar xD

  dropdownselection(columntype) {
    this.culumnaSeleccionada = columntype;
    console.log('object :>> ', columntype);
    
  }

  dropdownselectionTables(relatedTable){
    this.NombreTablaSeleccionada= relatedTable;
    console.log('object :>> ', relatedTable);

  }

  saveNewtable() {

    delete this.tables.created_at;
    delete this.tables.id;
    let mySQL = "CREATE TABLE projectotbd.";
    let nametable1 = this.tables.Name;
    let query1 = mySQL.concat(nametable1.toString(), " ", "(", this.cols.toString(), ");");

    this.tableService.addviaTableQuery(query1)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )

    
    console.log(query1);
  }

  getVariables() {
    this.retrieveData.GetTableVariablesSQL()
      .subscribe(
        res => {
          this.variables = res;
        },
        err => console.error(err)
      );
  }

  getTablesNames() {
    this.retrieveData.GetTableNamesSQL()
      .subscribe(
        res => {
          this.tablenames = res;
        },
        err => console.error(err)
      );
  }



}
