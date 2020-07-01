import { Request, Response, query, text } from 'express';
//import  *as tedious  from 'tedious';
var Request = require('tedious').Request;

import pool from '../../database';
// import poolsql from '../../databasesql';

class MYSQLExecQueryController {


    public async execQuery(req: Request, res: Response): Promise<void> {
        console.log('req.body MYSQLExecQueryController:>> ', req.body.query);
        pool.query(req.body.query).then((responsee) => {
            res.json({ message: responsee });
        }, (error) => {
            res.status(400).json(error)
        });
        //res.status(400).json({ error: "error Desconocido" })
    }


}

export const mYSQLExecQueryController = new MYSQLExecQueryController();