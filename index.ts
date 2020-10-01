import Server from "./servicios/server";
import { SEVER_PORT_EXPRESS } from './global/enviroment';
import { router } from './routes/router';
import bodyParser from "body-parser";
import cors from 'cors';

const server = new Server();

// Body
server.app.use( bodyParser.urlencoded({extended: true}));
server.app.use( bodyParser.json());
server.app.use('/', router);

// Cors
server.app.use( cors({origin: true, credentials: true }));

server.start(()=>{
    console.log(`Server Running on Port: ${SEVER_PORT_EXPRESS}`);
});