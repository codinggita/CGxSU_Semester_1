### **Using Redux Toolkit to Share API Data Across Multiple Components**

1. **`UserList`** → Calls an API (`GET` request) and stores data in Redux.
2. **`UserTable`** → Reads and displays the user data from Redux.
3. **`UserCount`** → Shows the total number of users.
4. **`UserSearch`** → Filters users based on input.

---

## **Step 1: Install Redux Toolkit & React-Redux**

```sh
npm install @reduxjs/toolkit react-redux
```

## **Step 2: Set Up Redux Store**

Create a folder `redux` and inside it, create `store.js` and `userSlice.js`.

### **🔹 store.js**

This file sets up the Redux store with our `userSlice`.

## **Step 3: Create Redux Slice for User Data**

Create `userSlice.js` to manage state and API requests.

## **Step 4: Wrap App with Redux Provider**

Modify `index.js` or `main.jsx` to connect Redux.

## **Step 5: Create Four Components**

✅ `UserList`: **This component calls the API and stores data in Redux.**  
✅ `UserTable`: **This component reads and displays user data stored in Redux.**  
✅ `UserCount`: **This component uses Redux state to count users.**  
✅ `UserSearch`: **This component filters users using Redux state.**

## **How It Works:**

1. `UserList` fetches API data and **stores it in Redux**.
2. `UserTable`, `UserCount`, and `UserSearch` **use Redux state** without making new API calls.
3. **No need for prop drilling or context!**
4. If new users are added in `UserList`, **all components update automatically**.

## **Key Benefits of Redux Toolkit in This Case**

✅ **Single API call** → Data is stored globally, avoiding unnecessary re-fetching.  
✅ **Shared State** → All components use the same Redux state (no prop drilling).  
✅ **Automatic Updates** → When state changes, components re-render automatically.  
✅ **Performance Optimized** → Redux Toolkit handles caching and memoization efficiently.
