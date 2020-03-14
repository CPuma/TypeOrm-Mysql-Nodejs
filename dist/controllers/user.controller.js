"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../entity/User");
var typeorm_1 = require("typeorm");
exports.getUsers = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.status(200).json({ ok: true, data: { users: users } })];
        }
    });
}); };
exports.getUserByID = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!Number(id))
                    return [2 /*return*/, res.status(400).json({
                            ok: false,
                            error: {
                                message: "Id Invalido o inexistente"
                            }
                        })];
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, res.status(400).json({
                            ok: false,
                            error: {
                                message: "No se encontro Usuario"
                            }
                        })];
                return [2 /*return*/, res.status(200).json({ ok: true, data: { user: user } })];
        }
    });
}); };
exports.createUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, firstName, lastName, age, newUSer, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, age = _a.age;
                newUSer = typeorm_1.getRepository(User_1.User).create({
                    firstName: firstName,
                    lastName: lastName,
                    age: age
                });
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(newUSer)];
            case 1:
                result = _b.sent();
                return [2 /*return*/, res.json({ ok: true, data: { user: result } })];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, res
                        .status(500)
                        .json({ ok: false, error: { message: error_1.message } })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, firstName, lastName, age, id, user, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, age = _a.age;
                id = req.params.id;
                if (!Number(id))
                    throw new Error("Id invalido");
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(id)];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("No existe usuario");
                typeorm_1.getRepository(User_1.User).merge(user, { firstName: firstName, lastName: lastName, age: age });
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(user)];
            case 2:
                result = _b.sent();
                return [2 /*return*/, res.status(200).json({ ok: true, data: { user: result } })];
            case 3:
                error_2 = _b.sent();
                return [2 /*return*/, res
                        .status(500)
                        .json({ ok: false, error: { message: error_2.message } })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                if (!Number(id))
                    throw new Error("Id Invalido");
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).delete(id)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({ ok: true, data: result })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res
                        .status(500)
                        .json({ ok: false, error: { message: error_3.message } })];
            case 3: return [2 /*return*/];
        }
    });
}); };
