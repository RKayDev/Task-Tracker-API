import taskLogic from "../logic/taskLogic.js";

export const createTask = async (req, res) => res.json(await taskLogic.createTask(req.body.userid, req.body.title, req.body.description));

export const deleteTask = async (req, res) => res.json(await taskLogic.deleteTask(req.params.id));

export const updateTask = async (req, res) => res.json(await taskLogic.updateTask(req.params.id, req.body.title, req.body.description, req.body.completed));

export const getTask = async (req, res) => res.json(await taskLogic.getTask(req.params.id));

export const getTasks = async (req, res) => res.json(await taskLogic.getTasks(req.params.userid));

export default { createTask, deleteTask, updateTask, getTask, getTasks };

