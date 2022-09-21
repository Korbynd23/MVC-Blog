// const commentClick = document.querySelector('#comment');
// const router = require('express').Router();
// const { Post} = require('../../models');


// router.get('/:id', async (req, res) => {
//     try {
//       const postData = await Post.findByPk(req.params.id, {
//       });
  
//       if (!postData) {
//         res.status(404).json({ message: 'No Post found with this id!' });
//         return;
//       }
  
//       res.status(200).json(postData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   commentClick.addEventListener("click", newComment());
