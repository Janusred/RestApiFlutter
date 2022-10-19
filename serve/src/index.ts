
import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import vacantesRoutes from './routes/vacantesRoutes';

import morgan from 'morgan';
import cors from 'cors';


class Server{

app: Application;

constructor(){
  this.app =  express();
  this.routes();
  this.config();
}
config(): void{ //configuracion del servidor
this.app.set('port',process.env.PORT || 3000); //configuracion el en puerto 3000 del servidor
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());// convierte los datos a json
this.app.use(express.urlencoded({extended:false}));
}
routes():void{
this.app.use('/',indexRoutes);
this.app.use('/api/vacantes',vacantesRoutes);
}
start():void{
    this.app.listen(this.app.get('port'), ()=>{
console.log('Janus conectado a servidor',this.app.get('port'));// prueba en conexion al servidor

    });
}

} 
const server= new Server();
server.start();