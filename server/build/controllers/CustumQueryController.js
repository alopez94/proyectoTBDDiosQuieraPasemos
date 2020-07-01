"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customquerycontroller = void 0;
//import  *as tedious  from 'tedious';
var Request = require('tedious').Request;
const database_1 = __importDefault(require("../database"));
const databasesql_1 = __importDefault(require("../databasesql"));
class CustomQueryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req.body :>> ', req.body.query);
            let responsee = database_1.default.query(req.body.query);
            res.json({ message: responsee });
        });
    }
    createSQL(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req.body.query :>> ', req.body.query);
            let query2 = req.body.query;
            let request = new Request(query2, (err, rowcount, rows) => {
                if (err) {
                    res.status(400).json(err);
                }
                res.json(rows);
            });
            let responsee = databasesql_1.default.execSql(request);
            console.log('responsee :>> ', responsee);
            //res.json({message:responsee});
        });
    }
    traerNombresTablasmySQL(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Check');
            let getTable = "SELECT table_name FROM information_schema.tables;";
            let tablesNames = database_1.default.query(getTable);
            res.json(tablesNames);
        });
    }
    createTableMySQL(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req.body :>> ', req.body.query);
            let responsee = database_1.default.query(req.body.query);
            res.json({ message: responsee });
        });
    }
}
exports.customquerycontroller = new CustomQueryController();
