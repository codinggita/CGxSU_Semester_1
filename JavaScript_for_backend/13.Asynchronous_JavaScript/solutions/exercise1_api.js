/**
 * Exercise 1: Fetch user data from JSONPlaceholder
 */

async function fetchUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

fetchUser(1).then(user => console.log('User:', user));

export { fetchUser };
