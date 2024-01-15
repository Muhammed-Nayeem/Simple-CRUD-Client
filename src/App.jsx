import "./App.css";

function App() {
  const userFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const email = form.email.value;
    const users = { name, profession, email };
    console.log(users);

    //POST API:
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId) {
          alert("User added successfully!");
          form.reset();
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <section className="app">
      <div className="container">
        <h2>Simple CRUD Client</h2>
        <div className="app-form">
          <form onSubmit={userFormHandler}>
            <input type="text" name="name" placeholder="Enter Name...." />
            <input type="text" name="profession" placeholder="Your Profession...." />
            <input type="email" name="email" placeholder="Your Email...." />
            <input type="submit" value="Add User" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
