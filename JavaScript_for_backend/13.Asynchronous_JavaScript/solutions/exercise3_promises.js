const fetchUser = userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: `User${userId}`, email: `user${userId}@example.com` });
    }, 100);
  });
};

const fetchMultipleUsers = userIds => {
  const promises = userIds.map(id => fetchUser(id));
  return Promise.all(promises);
};

fetchMultipleUsers([1, 2, 3])
  .then(users => console.log('Users:', users))
  .catch(error => console.error(error));

export { fetchMultipleUsers };
