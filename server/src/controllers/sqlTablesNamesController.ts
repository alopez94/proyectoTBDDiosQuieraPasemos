import { Request, Response } from 'express';
import { TYPES } from 'tedious';
var Request = require('tedious').Request;


import pool  from '../database';
import poolsql from '../databasesql';



class sqlTablesNames {

   
    public async getTableNames(req: Request, res: Response): Promise<void>{
       
        let query2 = 'SELECT * FROM consult_names;';
        let request = new Request(query2,(err: any,rowcount: any,rows: any)=>{
            if(err){
                res.status(400).json(err);
            }
            res.json(rows.map((element: any)=>{
                return element[0].value;
            }));
        });
        
        let responsee =  poolsql.execSql(request);
        
        
    }

    

    
}

export const sqltablesnames = new sqlTablesNames();