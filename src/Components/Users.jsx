import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const deleteUserHandler = (_id) => {
    console.log(`User Id is: ${_id}`);

    //delete user by api:
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted successfully!");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ margin: "20px 0" }}>Total Users: {users.length}</h2>
        <ul>
          {users.map((user) => (
            <li
              style={{
                margin: "10px 0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              key={user?._id}
            >
              <p>
                Name: {user?.name}, Profession: {user?.profession}, Email:{" "}
                {user?.email}
              </p>
              <button
                onClick={() => deleteUserHandler(user?._id)}
                style={{ padding: "4px 15px", cursor: "pointer" }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
