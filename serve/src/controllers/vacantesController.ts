import { Request, Response } from "express";
import pool from "../database";

class VacantesController {

    public async list(req: Request, res: Response) {
        const {id} = req.params;
        const vacantes = await pool.query('SELECT * FROM vacante');
        res.json(vacantes);// consulta de datos en vista json

    }
    public  async getOne(req: Request, res: Response) {
          const {id} = req.params;
         const vacantes = await pool.query('SELECT * FROM vacante WHERE id = ?', [id]);
        
         if (vacantes.lenth > 0){
             return res.json(vacantes[0]);
         }
         res.status(404).json({text:'no existe'});

    }
    public async create(req: Request, res: Response) : Promise<any>{
         await pool.query('INSERT INTO vacante set ?', [req.body]);

        console.log(req.body);
        res.json({ message: 'Guardado ' });
        
    }
    public async update(req: Request, res: Response) {
       const { id } = req.params;
       const oldVacante = req.body;
       await pool.query('UPDATE vacante set ? WHERE id = ?', [req.body, id]);
       res.json({ message: "Actualizado" });
       
   }
       
       public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM vacante WHERE id = ?', [id]);
        res.json({ message: "Eliminado" });
    }
    
}
const vacantesController = new VacantesController();
export default vacantesController; 