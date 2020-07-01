"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sqlTablesController_1 = require("../../controllers/SQLControllers/sqlTablesController");
class sqlTablesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sqlTablesController_1.sqltablesnames.getTableNames);
    }
}
const sqltablesNames = new sqlTablesRoutes();
exports.default = sqltablesNames.router;
