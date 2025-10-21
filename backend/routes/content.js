const express = require('express');
const { 
    createContent, 
    getContents, 
    getContentById, 
    updateContent, 
    deleteContent 
} = require('../controllers/contentController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.use(authenticateToken); // All content routes require authentication

router.post('/', createContent);
router.get('/', getContents);
router.get('/:id', getContentById);
router.put('/:id', updateContent);
router.delete('/:id', deleteContent);

module.exports = router;