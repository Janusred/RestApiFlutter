import { Request, Response} from "express";


class IndexController{

    index (req: Request, res: Response){
        res.json({text:'La info esta en /api/vacantes Funciona todo'});
    }
}
export const indexController = new IndexController(); 