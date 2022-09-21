const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('new');
});

module.exports = router;