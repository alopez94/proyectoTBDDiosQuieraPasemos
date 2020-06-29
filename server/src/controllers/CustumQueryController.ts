import { Request, Response, query, text } from 'express';

import pool  from '../database';

class CustomQueryController {

    
    public async create(req: Request, res: Response): Promise<void>{
        console.log('req.body :>> ', req.body.query);
        let responsee =  pool.query(req.body.query);
        res.json({message:responsee});
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