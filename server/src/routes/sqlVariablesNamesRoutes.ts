import { Router } from 'express';

import { sqlvariablesnames } from '../controllers/sqlVariablesNamesController'

class sqlvariableRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', sqlvariablesnames.GetVariablesNames);
    }
}

const sqlvariables = new sqlvariableRoutes();
export default sqlvariables.router;