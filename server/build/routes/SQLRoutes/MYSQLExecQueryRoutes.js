"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MYSQLExecQueryController_1 = require("../../controllers/MYSQLControllers/MYSQLExecQueryController");
class MYSQLExecQueryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', MYSQLExecQueryController_1.mYSQLExecQueryController.execQuery);
    }
}
const mYSQLExecQueryRoutes = new MYSQLExecQueryRoutes();
exports.default = mYSQLExecQueryRoutes.router;
