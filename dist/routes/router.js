"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/users', function (req, res) {
    res.json({
        success: true,
        name: "Sharky GET"
    });
});
exports.router.post('/users', function (req, res) {
    var api_key = req.body.api_key;
    var token = req.body.token;
    res.json({
        success: true,
        name: "Sharky POST",
        api_key: api_key,
        token: token
    });
});
exports.router.post('/users/:id/:name/:last_name', function (req, res) {
    var api_key = req.body.api_key;
    var token = req.body.token;
    var id = req.params.id;
    var name = req.params.name;
    var last_name = req.params.last_name;
    res.json({
        success: true,
        username: "Sharky POST",
        api_key: api_key,
        token: token,
        id: id,
        name: name,
        last_name: last_name
    });
});
