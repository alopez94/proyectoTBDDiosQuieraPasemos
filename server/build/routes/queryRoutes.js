"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustumQueryController_1 = require("../controllers/CustumQueryController");
class QueryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', CustumQueryController_1.customquerycontroller.create);
        this.router.get('/', CustumQueryController_1.customquerycontroller.traerNombresTablasmySQL);
        this.router.post('/add', CustumQueryController_1.customquerycontroller.createTableMySQL);
        this.router.post('/sql', CustumQueryController_1.customquerycontroller.createSQL);
    }
}
const queryRoute22 = new QueryRoutes();
exports.default = queryRoute22.router;
