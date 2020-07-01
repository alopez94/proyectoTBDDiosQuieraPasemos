import { Router } from 'express';

import { sqltablesnames } from '../../controllers/SQLControllers/sqlTablesController'

class sqlTablesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', sqltablesnames.getTableNames);
    }
}

const sqltablesNames = new sqlTablesRoutes();
export default sqltablesNames.router;