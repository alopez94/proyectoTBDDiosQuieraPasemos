import { Router } from 'express';

import { mYSQLExecQueryController } from '../../controllers/MYSQLControllers/MYSQLExecQueryController';

class MYSQLExecQueryRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.post('/', mYSQLExecQueryController.execQuery);
    }
}

const mYSQLExecQueryRoutes = new MYSQLExecQueryRoutes();
export default mYSQLExecQueryRoutes.router;
