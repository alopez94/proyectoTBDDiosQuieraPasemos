"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ Text: 'Api is in Api/Games' });
    }
}
exports.indexController = new IndexController();
