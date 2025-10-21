const pool = require('../config/database');

class Content {
    static async create(contentData) {
        const { title, description, body, author_id } = contentData;
        
        const [result] = await pool.execute(
            'INSERT INTO contents (title, description, body, author_id) VALUES (?, ?, ?, ?)',
            [title, description, body, author_id]
        );
        return result.insertId;
    }

    static async findAll(page = 1, limit = 10, search = '') {
        const offset = (page - 1) * limit;
        let query = `
            SELECT c.*, u.username as author_name 
            FROM contents c 
            JOIN users u ON c.author_id = u.id
        `;
        let countQuery = 'SELECT COUNT(*) as total FROM contents c';
        const params = [];
        const countParams = [];

        if (search) {
            query += ' WHERE c.title LIKE ? OR c.description LIKE ?';
            countQuery += ' WHERE c.title LIKE ? OR c.description LIKE ?';
            const searchTerm = `%${search}%`;
            params.push(searchTerm, searchTerm);
            countParams.push(searchTerm, searchTerm);
        }

        query += ' ORDER BY c.created_at DESC LIMIT ? OFFSET ?';
        params.push(limit, offset);

        const [rows] = await pool.execute(query, params);
        const [countRows] = await pool.execute(countQuery, countParams);
        
        return {
            data: rows,
            total: countRows[0].total,
            page: parseInt(page),
            totalPages: Math.ceil(countRows[0].total / limit)
        };
    }

    static async findById(id) {
        const [rows] = await pool.execute(
            `SELECT c.*, u.username as author_name 
             FROM contents c 
             JOIN users u ON c.author_id = u.id 
             WHERE c.id = ?`,
            [id]
        );
        return rows[0];
    }

    static async update(id, contentData) {
        const { title, description, body } = contentData;
        
        const [result] = await pool.execute(
            'UPDATE contents SET title = ?, description = ?, body = ? WHERE id = ?',
            [title, description, body, id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await pool.execute(
            'DELETE FROM contents WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }

    static async findByAuthor(author_id) {
        const [rows] = await pool.execute(
            'SELECT * FROM contents WHERE author_id = ? ORDER BY created_at DESC',
            [author_id]
        );
        return rows;
    }
}

module.exports = Content;