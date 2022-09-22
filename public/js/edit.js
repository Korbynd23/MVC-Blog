// const postId = document.querySelector( 'div[data-id="{{posted.id}}"] input' ).value;
// const postId = document.querySelector(`input[name="post_id]`).value;

const updateButton = document.querySelector('#edit-post-form');

const newCharHandler = async (event) => {
    event.preventDefault();
  
    const newTitle = document.querySelector('#formTextarea1').value;
    const newText = document.querySelector('#formTextarea2').value;
    const editId = document.querySelector('#hiddenId').value;

    console.log(newText)

    const response = await fetch(`/api/posts/${editId}`, {
        method: 'PUT',
        body: JSON.stringify({
          newTitle,
          newText
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update post.');
      }
    }



updateButton.addEventListener("click", newCharHandler);