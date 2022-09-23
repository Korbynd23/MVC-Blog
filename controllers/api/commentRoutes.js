const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      text: req.body.commentText,
      userId: req.session.user_id
    });
      res.status(200).json(commentData);
    }
    catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router