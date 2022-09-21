const router = require('express').Router();
const apiRoutes = require('./api');
// const newRoutes = require('./newRoutes');
const homeRoutes = require('./homeRoutes')
const dashRoutes = require('./dashboardRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/new', newRoutes);
router.use('/dashboard', dashRoutes)

module.exports = router;