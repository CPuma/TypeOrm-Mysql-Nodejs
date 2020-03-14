"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var router = express_1.Router();
router
    .get("", user_controller_1.getUsers)
    .get("/:id", user_controller_1.getUserByID)
    .post("", user_controller_1.createUser)
    .put("/:id", user_controller_1.updateUser)
    .delete("/:id", user_controller_1.deleteUser);
exports.default = router;
