"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TableQueryController_1 = require("../controllers/TableQueryController");
class TableQueryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', TableQueryController_1.tablequerycontroller.create);
    }
}
const tablequeryRoute22 = new TableQueryRoutes();
exports.default = tablequeryRoute22.router;
