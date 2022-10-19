"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vacantesController_1 = __importDefault(require("../controllers/vacantesController"));
class VacantesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //  this.router.get('/',(req, res)=> res.send('Vacantes'));
        this.router.get('/', vacantesController_1.default.list);
        this.router.get('/:id', vacantesController_1.default.getOne);
        this.router.post('/', vacantesController_1.default.create);
        this.router.put('/:id', vacantesController_1.default.update);
    }
}
const vacantesRoutes = new VacantesRoutes();
exports.default = vacantesRoutes.router;
