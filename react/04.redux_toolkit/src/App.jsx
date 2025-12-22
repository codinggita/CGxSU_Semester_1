import React from "react";
import UserList from "./components/UserList";
import UserTable from "./components/UserTable";
import UserCount from "./components/UserCount";
import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div>
      <h1>Redux API State Management</h1>
      <UserList />
      <UserTable />
      <UserCount />
      <UserSearch />
    </div>
  );
};

export default App;
