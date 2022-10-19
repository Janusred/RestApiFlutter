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
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({ text: 'Lista de juegos' });
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM piz');
            res.json(games); // consulta de datos en vista json
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({ text: 'un solo juego ' + req.params.id }); consultas en postman
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM piz WHERE id = ?', [id]);
            if (games.lenth > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO piz set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Guardado ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({ text: 'Actualizando ' + req.params.id });
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE piz set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "Actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM piz WHERE id = ?', [id]);
            res.json({ message: "Eliminado" });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
