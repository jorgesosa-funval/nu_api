import { Proffessions } from "./Model.js";

/**
 * @description Get all Proffessionss
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const index = async (req, res, next) => {
  try {
    //#swagger.tags = ['Proffessions']
    //#swagger.description = 'Obtiene todos los proffessions activos.'

    const proffessions = await Proffessions.findAll();
    res.status(200).json(proffessions);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Get a single Proffessions
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const show = async (req, res, next) => {
  try {
    //#swagger.tags = ['Proffessions']
    //#swagger.description = 'Obtiene un proffession por id.'

    const proffession = await Proffessions.findByPk(req.params.id);
    if (!proffession) {
      throw { status: 404, message: "proffession not found" };
    }
    res.status(200).json(proffession);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Create a new Proffessions
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const store = async (req, res, next) => {
  try {
    //#swagger.tags = ['Proffessions']
    //#swagger.description = 'Crea un nuevo proffession.'
    const { name } = req.body;
    const proffession = await Proffessions.create(req.body, {
      validate: true,
    });
    res.status(201).json({
      status: "ok",
      message: "Proffessions created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update a Proffessions
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const update = async (req, res, next) => {
  try {
    //#swagger.tags = ['Proffessions']
    //#swagger.description = 'Actualiza un proffession por id.'
    const { name } = req.body;
    const proffession = await ProffessionsfindByPk(req.params.id);
    if (!proffession) {
      throw { status: 404, message: "Proffessions not found" };
    }
    await proffession.update(req.body);
    await proffession.save();
    res.status(200).json({
      status: "ok",
      message: "Proffessions updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Delete a Proffessions
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */

export const destroy = async (req, res, next) => {
  try {
    //#swagger.tags = ['Proffessions']
    //#swagger.description = 'Elimina un proffession por id.'

    const proffession = await Proffessions.findByPk(req.params.id);
    if (!proffession) {
      throw { status: 404, message: "Proffessions not found" };
    }
    await proffession.destroy();
    res.status(204).json({
      status: "ok",
      message: "Proffessions deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default { index, show, store, update, destroy };
