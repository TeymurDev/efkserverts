const db = require("../db");

class CategoryController {
  async createCategory(req: any, res: any) {
    const { name } = req.body;
    const newCategory = await db.query(
      `INSERT INTO category (name) values ($1) RETURNING *`,
      [name]
    );

    res.json(newCategory.rows[0]);
  }

  async getCategories(req: any, res: any) {
    const categories = await db.query(`SELECT * FROM category`);
    res.json(categories.rows);
  }

  async getOneCategory(req: any, res: any) {
    const id = req.params.id;
    const oneCategory = await db.query(`SELECT * FROM category where id = $1`, [id]);
    res.json(oneCategory.rows[0]);
  }

  async updateCategory(req: any, res: any) {
    const { id, name } = req.body;
    const updateCategory = await db.query(
      `UPDATE category set name = $1 where id = $2 RETURNING *`,
      [name, id]
    );
    res.json(updateCategory.rows[0]);
  }

  async deleteCategory(req: any, res: any) {
    const id = req.params.id;
    const deleteCategory = await db.query(`DELETE FROM category where id = $1`, [id]);
    res.json(deleteCategory.rows[0]);
  }
}

module.exports = new CategoryController();
