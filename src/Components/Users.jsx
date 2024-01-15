import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <section>
      <div className="container">
        <h2 style={{ margin: "20px 0" }}>Total Users: {users.length}</h2>
        <ul>
          {users.map((user) => (
            <li key={user?._id}>
              <p>
                Name: {user?.name}, Profession: {user?.profession}, Email:{" "}
                {user?.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
