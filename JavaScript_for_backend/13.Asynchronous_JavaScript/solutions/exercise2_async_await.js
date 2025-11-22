const fetchUser = id => Promise.resolve({ id, name: `User${id}` });

async function fetchMultipleUsersOptimized(userIds) {
  const promises = userIds.map(id => fetchUser(id));
  const users = await Promise.all(promises);
  return users;
}

fetchMultipleUsersOptimized([1, 2, 3]).then(console.log);

export { fetchMultipleUsersOptimized };
