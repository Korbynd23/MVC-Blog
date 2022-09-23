const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.commentText,
      postId: req.body.post_id,
      userId: req.session.user_id
    });
      res.status(200).json(commentData);
    }
    catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router