const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const newRoutes = require('./newRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes );
router.use('/new', newRoutes);
router.use ('/comments', commentRoutes);

module.exports = router;