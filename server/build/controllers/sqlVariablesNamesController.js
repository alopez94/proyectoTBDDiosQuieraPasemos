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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlvariablesnames = void 0;
const tedious_1 = require("tedious");
class sqlVariablesNames {
    GetVariablesNames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let variable2 = Object.keys(tedious_1.TYPES).map((key) => {
                return {
                    name: tedious_1.TYPES[key].name,
                    maxlength: tedious_1.TYPES[key].maximumLength,
                    Type: tedious_1.TYPES[key].type
                };
            });
            //console.log('object :>> ', TYPES);
            res.json(variable2);
        });
    }
}
exports.sqlvariablesnames = new sqlVariablesNames();
