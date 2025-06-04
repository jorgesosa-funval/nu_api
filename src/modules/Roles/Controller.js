import {Roles}from "./Model.js"
    
 /**
  * @description Get all Roless
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
    //#swagger.tags = ['Roles']
    //#swagger.description = 'Obtiene todos los roles activos.'

     const roles = await Roles.findAll();
     res.status(200).json(roles);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Roles
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
    //#swagger.tags = ['Roles']
    //#swagger.description = 'Obtiene un role por id.'

     const role = await Roles.findByPk(req.params.id);
     if (!role) {
       throw { status: 404, message: "role not found" };
     }
     res.status(200).json(role);
   } catch (error) {
     next(error);
   }
 };
 
  
 
 export default { index, show};

