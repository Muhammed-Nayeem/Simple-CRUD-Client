import { useLoaderData } from "react-router-dom";

const UserUpdate = () => {
  const user = useLoaderData();
  const userUpdateHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const email = form.email.value;
    console.log(name, profession, email);
    const updateUser = { name, profession, email };

    //update user:
    fetch(`http://localhost:5000/users/${user?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User updated successfully!");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <section style={{ margin: "20px 0" }}>
      <div className="container">
        <div>
          <h2>User Update here</h2>
          <div style={{ width: "400px", margin: "20px 0" }}>
            <form style={{ width: "100%" }} onSubmit={userUpdateHandler}>
              <input
                style={{ width: "100%", margin: "8px 0", padding: "6px 8px" }}
                type="text"
                name="name"
                defaultValue={user?.name}
                placeholder="Name"
              />
              <input
                style={{ width: "100%", margin: "8px 0", padding: "6px 8px" }}
                type="text"
                name="profession"
                defaultValue={user?.profession}
                placeholder="Profession"
              />
              <input
                style={{ width: "100%", margin: "8px 0", padding: "6px 8px" }}
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
              />
              <input
                style={{
                  width: "100%",
                  margin: "8px 0",
                  padding: "6px 8px",
                  cursor: "pointer",
                }}
                type="submit"
                value="Update User"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserUpdate;
