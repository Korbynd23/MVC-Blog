const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                }
            ],
        });

        const postMetaData = postData.map((newData) => newData.get({ plain: true }));
        console.log(postMetaData)
        res.render('dashboard', {
            postMetaData,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET post by id
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        const posted = postData.get({ plain: true });
        console.log(posted)
        res.render('comment', {
            posted,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/new', async (req, res) => {
    res.render('new');
});

module.exports = router;