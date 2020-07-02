import { Router } from 'express';

import { mYSQLExecQueryController } from '../../controllers/MYSQLControllers/MYSQLExecQueryController';

class SQLExecQueryRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.post('/', mYSQLExecQueryController.execQuery);
    }
}

const sQLExecQueryRoutes = new SQLExecQueryRoutes();
export default sQLExecQueryRoutes.router;
