import express from 'express';
import { SEVER_PORT_EXPRESS } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server{

    public app: express.Application;
    public puerto: number;
    public io: socketIO.Server;
    private httpServer: http.Server;

    constructor() {
        this.app = express();
        this.puerto = SEVER_PORT_EXPRESS;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.listener();
    }

    private listener(){
        console.log('Listening');
        this.io.on('connection', client => {
            console.log('cliente conectado');
        })
    }

    start( callback : Function) {
        // @ts-ignore
        this.app.listen(this.puerto, callback);
    }

}
