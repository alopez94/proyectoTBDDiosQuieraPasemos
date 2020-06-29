import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response){
        res.json({Text: 'Api is in Api/Games'});
    }

}

export const indexController = new IndexController();