import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserSearch = () => {
  const [query, setQuery] = useState("");
  const users = useSelector((state) => state.user.users);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
