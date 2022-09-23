const commentBtn = document.querySelector('#commentBtn')



const newComment = async (event) => {
  const commentText = document.querySelector('#formTextarea').value;
  // event.preventDefault();

    
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(post_id)
    
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        commentText
        
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to comment on post.');
    }
  };
    
    
    commentBtn.addEventListener("click", newComment());
    
    
    
    

    
    
    
    
    // old text2
    //   if (commentText) {
    //       const response = await fetch('/api/comments', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //           post_id,
    //           commentText
    //         }),
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
            
    //       });
          
    //       if (response.ok) {
    //         document.location.reload();
    //       } else {
    //         alert(response.statusText);
    //       }
    //     }
    // }











// old code1
// const commentClick = document.querySelector('#commentBtn');
// const router = require('express').Router();
// const { Post } = require('../../models');

// const editId = document.querySelector(`input[name="post_id"]`).value;


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

