const fetchUser = id => Promise.resolve({ id, name: 'User' });
const fetchOrders = id => Promise.resolve([{ id: 1 }]);
const processOrders = orders => orders.map(o => ({ ...o, processed: true }));

async function getUserDataAsync(userId) {
  try {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(user.id);
    const processed = await processOrders(orders);
    return processed;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getUserDataAsync(1).then(console.log);

export { getUserDataAsync };
