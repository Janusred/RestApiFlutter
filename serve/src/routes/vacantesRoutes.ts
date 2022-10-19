import { Router } from "express";
import vacantesController from "../controllers/vacantesController";

class VacantesRoutes{

    public router: Router= Router();
    constructor(){
this.config();
    }
    config():void{
      //  this.router.get('/',(req, res)=> res.send('Vacantes'));
      this.router.get('/', vacantesController.list);
      this.router.get('/:id',vacantesController.getOne);
        
        this.router.post('/',vacantesController.create);
        this.router.put('/:id',vacantesController.update);
    }
}

const vacantesRoutes= new VacantesRoutes();
export default vacantesRoutes.router;