import React from "react";
import { useEffect, useState } from "react";

function CekOrderList() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div>
      <div className="flex">
        {users.map((user) => JSON.stringify(user.email))}
      </div>
    </div>
  );
}

export default CekOrderList;
