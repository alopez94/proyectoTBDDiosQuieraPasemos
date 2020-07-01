import { Request, Response, query, text } from 'express';

import pool  from '../database';


class TableQueryController {

    
    public async create(req: Request, res: Response): Promise<void>{
        console.log('req.body :>> ', req.body.query);

        
        let responsee =  pool.query(req.body.query);
        res.json({message:responsee});
    }

    

   
    
}

export const tablequerycontroller = new TableQueryController();