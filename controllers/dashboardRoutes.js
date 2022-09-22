const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts that logged in user created
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'createdAt',
        'text'
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'text', 'post_id', 'user_id', 'createdAt'],
        //   include: {
        //     model: User,
        //     attributes: ['user_name']
        //   }
        // },
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// GET post by id
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
              // {
              //   model: Comment,
              //   attributes: ['id', 'text', 'post_id', 'user_id', 'createdAt'],
              //   include: {
              //     model: User,
              //     attributes: ['user_name']
              //   }
              // },
              {
                model: User,
                attributes: ['user_name']
              }
            ]
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