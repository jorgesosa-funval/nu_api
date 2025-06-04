import { Events } from "./Model.js";

/**
 * @description Get all Eventss
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const index = async (req, res, next) => {
  try {
    //#swagger.tags = ['Events']
    //#swagger.description = 'Obtiene todos los events activos.'

    const events = await Events.findAll();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Get a single Events
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const show = async (req, res, next) => {
  try {
    //#swagger.tags = ['Events']
    //#swagger.description = 'Obtiene un event por id.'

    const event = await Events.findByPk(req.params.id);
    if (!event) {
      throw { status: 404, message: "event not found" };
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Create a new Events
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const store = async (req, res, next) => {
  try {
    //#swagger.tags = ['Events']
    //#swagger.description = 'Crea un nuevo event.'
    const { title, description, event_date, picture, galery_link } = req.body;
    const event = await Events.create(req.body, {
      validate: true,
    });
    res.status(201).json({
      status: "ok",
      message: "Events created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update a Events
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const update = async (req, res, next) => {
  try {
    //#swagger.tags = ['Events']
    //#swagger.description = 'Actualiza un event por id.'
    const { title, description, event_date, picture, galery_link } = req.body;
    const event = await EventsfindByPk(req.params.id);
    if (!event) {
      throw { status: 404, message: "Events not found" };
    }
    await event.update(req.body);
    await event.save();
    res.status(200).json({
      status: "ok",
      message: "Events updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Delete a Events
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */

export const destroy = async (req, res, next) => {
  try {
    //#swagger.tags = ['Events']
    //#swagger.description = 'Elimina un event por id.'

    const event = await Events.findByPk(req.params.id);
    if (!event) {
      throw { status: 404, message: "Events not found" };
    }
    await event.destroy();
    res.status(204).json({
      status: "ok",
      message: "Events deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default { index, show, store, update, destroy };
