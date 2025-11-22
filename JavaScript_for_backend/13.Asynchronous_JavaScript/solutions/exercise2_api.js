/**
 * Exercise 2: POST request to create resource
 */

async function createPost(postData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  });

  if (!response.ok) {
    throw new Error(`Failed to create post: ${response.status}`);
  }

  return await response.json();
}

createPost({
  title: 'Test Post',
  body: 'This is a test post',
  userId: 1
}).then(post => console.log('Created:', post));

export { createPost };
