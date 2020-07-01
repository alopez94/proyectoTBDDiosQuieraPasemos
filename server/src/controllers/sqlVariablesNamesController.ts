import { Request, Response } from 'express';
import { TYPES } from 'tedious';


import pool  from '../database';
import poolsql from '../databasesql';


class sqlVariablesNames {

    public async GetVariablesNames(req: Request, res: Response): Promise<void>{
        
        let variable2 = Object.keys(TYPES).map((key: string)=>{
            return {
                
               name: TYPES[key].name,
               maxlength: TYPES[key].maximumLength,
               Type: TYPES[key].type
               
            }
        });
        //console.log('object :>> ', TYPES);
        res.json(variable2);

        
    }

}

export const sqlvariablesnames = new sqlVariablesNames();