const express = require('express');
const router = express.Router();
const {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
  updateTemplate,
} = require('../controllers/resumeController');
const { protect } = require('../middleware/auth');

// All resume routes require authentication
router.use(protect);

router.route('/')
  .post(createResume)
  .get(getResumes);

router.route('/:id')
  .get(getResumeById)
  .put(updateResume)
  .delete(deleteResume);

router.patch('/:id/template', updateTemplate);

module.exports = router;
