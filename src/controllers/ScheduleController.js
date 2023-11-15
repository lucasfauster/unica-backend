const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("scale");

    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const image = req.body;

      await knex("scale").insert(image);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const image = req.body;

      const id = req.params;

      await knex("scale").update(image).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};