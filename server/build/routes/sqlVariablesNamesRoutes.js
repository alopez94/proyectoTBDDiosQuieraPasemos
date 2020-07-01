"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sqlVariablesNamesController_1 = require("../controllers/sqlVariablesNamesController");
class sqlvariableRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sqlVariablesNamesController_1.sqlvariablesnames.GetVariablesNames);
    }
}
const sqlvariables = new sqlvariableRoutes();
exports.default = sqlvariables.router;
