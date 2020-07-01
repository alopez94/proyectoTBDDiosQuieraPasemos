import { Router } from 'express';

import { sqltablesnames } from '../controllers/sqlTablesNamesController'

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