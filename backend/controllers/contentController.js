const Content = require('../models/Content');

const createContent = async (req, res) => {
    try {
        const { title, description, body } = req.body;
        const author_id = req.user.id;

        if (!title || !body) {
            return res.status(400).json({ error: 'Title and body are required' });
        }

        const contentId = await Content.create({ title, description, body, author_id });
        const content = await Content.findById(contentId);

        res.status(201).json({
            message: 'Content created successfully',
            content
        });
    } catch (error) {
        console.error('Create content error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getContents = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';

        const result = await Content.findAll(page, limit, search);

        res.json({
            message: 'Contents retrieved successfully',
            ...result
        });
    } catch (error) {
        console.error('Get contents error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getContentById = async (req, res) => {
    try {
        const { id } = req.params;
        const content = await Content.findById(id);

        if (!content) {
            return res.status(404).json({ error: 'Content not found' });
        }

        res.json({
            message: 'Content retrieved successfully',
            content
        });
    } catch (error) {
        console.error('Get content error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateContent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, body } = req.body;

        // Check if content exists and belongs to user
        const existingContent = await Content.findById(id);
        if (!existingContent) {
            return res.status(404).json({ error: 'Content not found' });
        }

        if (existingContent.author_id !== req.user.id) {
            return res.status(403).json({ error: 'Not authorized to update this content' });
        }

        const updated = await Content.update(id, { title, description, body });
        
        if (!updated) {
            return res.status(400).json({ error: 'Failed to update content' });
        }

        const content = await Content.findById(id);

        res.json({
            message: 'Content updated successfully',
            content
        });
    } catch (error) {
        console.error('Update content error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteContent = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if content exists and belongs to user
        const existingContent = await Content.findById(id);
        if (!existingContent) {
            return res.status(404).json({ error: 'Content not found' });
        }

        if (existingContent.author_id !== req.user.id) {
            return res.status(403).json({ error: 'Not authorized to delete this content' });
        }

        const deleted = await Content.delete(id);
        
        if (!deleted) {
            return res.status(400).json({ error: 'Failed to delete content' });
        }

        res.json({
            message: 'Content deleted successfully'
        });
    } catch (error) {
        console.error('Delete content error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createContent,
    getContents,
    getContentById,
    updateContent,
    deleteContent
};