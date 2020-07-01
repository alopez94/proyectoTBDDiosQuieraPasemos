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
exports.mYSQLExecQueryController = void 0;
//import  *as tedious  from 'tedious';
var Request = require('tedious').Request;
const database_1 = __importDefault(require("../../database"));
// import poolsql from '../../databasesql';
class MYSQLExecQueryController {
    execQuery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req.body MYSQLExecQueryController:>> ', req.body.query);
            database_1.default.query(req.body.query).then((responsee) => {
                res.json({ message: responsee });
            }, (error) => {
                res.status(400).json(error);
            });
            //res.status(400).json({ error: "error Desconocido" })
        });
    }
}
exports.mYSQLExecQueryController = new MYSQLExecQueryController();
