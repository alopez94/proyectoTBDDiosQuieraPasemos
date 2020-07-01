import { Request, Response, query, text } from 'express';
//import  *as tedious  from 'tedious';
var Request = require('tedious').Request;

import pool  from '../database';
import poolsql from '../databasesql';

class CustomQueryController {

    
    public async create(req: Request, res: Response): Promise<void>{
        console.log('req.body :>> ', req.body.query);
        let responsee =  pool.query(req.body.query);
        res.json({message:responsee});
    }

    public async createSQL(req: Request, res: Response): Promise<void>{
        console.log('req.body.query :>> ', req.body.query);
        let query2 = req.body.query;
        let request = new Request(query2,(err: any,rowcount: any,rows: any)=>{
            if(err){
                res.status(400).json(err);
            }
            res.json(rows);
        });
        
        let responsee =  poolsql.execSql(request);
        console.log('responsee :>> ', responsee);
        //res.json({message:responsee});
    }

    public async traerNombresTablasmySQL(req: Request, res: Response): Promise<void>{
        console.log('Check');
         let getTable = "SELECT table_name FROM information_schema.tables;";
        let tablesNames = pool.query(getTable);
           res.json(tablesNames);
           
      }


      public async createTableMySQL(req: Request, res: Response): Promise<void>{
        
        console.log('req.body :>> ', req.body.query);
        let responsee =  pool.query(req.body.query);
        res.json({message:responsee});
    }
    
}

export const customquerycontroller = new CustomQueryController();