"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sqlTablesNamesController_1 = require("../controllers/sqlTablesNamesController");
class sqlTablesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sqlTablesNamesController_1.sqltablesnames.getTableNames);
    }
}
const sqltablesNames = new sqlTablesRoutes();
exports.default = sqltablesNames.router;
