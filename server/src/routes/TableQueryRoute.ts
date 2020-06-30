import { Router } from 'express';

import { tablequerycontroller } from '../controllers/TableQueryController';

class TableQueryRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.post('/', tablequerycontroller.create); 
       
    }
}

const tablequeryRoute22 = new TableQueryRoutes();
export default tablequeryRoute22.router;
