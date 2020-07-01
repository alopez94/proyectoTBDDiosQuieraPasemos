"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tedious_1 = require("tedious");
const keys_1 = __importDefault(require("./keys"));
const poolSQL = new tedious_1.Connection(keys_1.default.databaseSQL);
poolSQL.on('connect', (err) => {
    if (err) {
        console.log("sqlError", err);
    }
    else {
        console.log('ya funciona wey');
    }
});
exports.default = poolSQL;
