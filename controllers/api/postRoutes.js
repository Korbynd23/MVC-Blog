const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');


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
    const postData = await Post.findAll({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.newTitle,
      text: req.body.newText,
      user_id: req.session.user_id,
    });
    // res.render('/api/posts', {
    //   newPost,
    //   loggedIn: req.session.logged_in,
    // });
    console.log('made it here')
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE posts by id
router.put('/:id', withAuth, (req, res) => {

  Post.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// DELETE post by route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;