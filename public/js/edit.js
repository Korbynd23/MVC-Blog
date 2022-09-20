const submitButton = document.querySelector('#create-post');

const newCharHandler = async (event) => {
    event.preventDefault();
  
    const newTitle = document.querySelector('#post-title').value;
    const newText = document.querySelector('#post-text').value;

    const response = await fetch(`/api/posts`, {
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



submitButton.addEventListener("click", newCharHandler);