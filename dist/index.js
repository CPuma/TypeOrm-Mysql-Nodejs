"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function (connection) {
    return console.log("Connecion con DDBB ", connection.options.database, '... EXISTOSA');
})
    .catch(function (error) { return console.log(error); });
app_1.default.listen(3000, function () {
    console.log("Server on Port ", 3000);
});
