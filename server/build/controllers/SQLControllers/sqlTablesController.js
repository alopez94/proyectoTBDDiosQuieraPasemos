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
exports.sqltablesnames = void 0;
var Request = require('tedious').Request;
const databasesql_1 = __importDefault(require("../../databasesql"));
class sqlTablesNames {
    getTableNames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query2 = 'SELECT * FROM consult_names;';
            let request = new Request(query2, (err, rowcount, rows) => {
                if (err) {
                    res.status(400).json(err);
                }
                res.json(rows.map((element) => {
                    return element[0].value;
                }));
            });
            let responsee = databasesql_1.default.execSql(request);
        });
    }
}
exports.sqltablesnames = new sqlTablesNames();
