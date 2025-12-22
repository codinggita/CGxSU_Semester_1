
import React from "react";
import { useSelector } from "react-redux";

const UserCount = () => {
  const userCount = useSelector((state) => state.user.users.length);

  return (
    <div>
      <h2>Total Users: {userCount}</h2>
    </div>
  );
};

export default UserCount;
