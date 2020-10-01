"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var enviroment_1 = require("../global/enviroment");
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.puerto = enviroment_1.SEVER_PORT_EXPRESS;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.listener();
    }
    Server.prototype.listener = function () {
        console.log('Listening');
        this.io.on('connection', function (client) {
            console.log('cliente conectado');
        });
    };
    Server.prototype.start = function (callback) {
        // @ts-ignore
        this.app.listen(this.puerto, callback);
    };
    return Server;
}());
exports.default = Server;
