import { Router } from 'express';

import { customquerycontroller } from '../controllers/CustumQueryController';

class QueryRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.post('/', customquerycontroller.create); 
        this.router.get('/', customquerycontroller.traerNombresTablasmySQL);
        this.router.post('/add', customquerycontroller.createTableMySQL);
    }
}

const queryRoute22 = new QueryRoutes();
export default queryRoute22.router;
