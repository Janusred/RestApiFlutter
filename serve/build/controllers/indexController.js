"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'La info esta en /api/vacantes Funciona todo' });
    }
}
exports.indexController = new IndexController();
