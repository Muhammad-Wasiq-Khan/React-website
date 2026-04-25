import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import './style.css'


function UserPage() {
  const [User, setUser] = useState([]);
  let nav = useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });

  }, []);

  return (
    <>
      <div className="flex">
        <h1 className="heading">Users</h1>
        <Navbar />
      </div>
      <div className="cards">

        {
          User.map((v, i) => {
            return (
              <div key={i}>
                <div className="card">
                  <h2>Name : {v.name}</h2>
                  <h2>Email : {v.email}</h2>
                  <button onClick={() => nav(`/users/${v.id}`)}>Open Details Page</button>
                </div>

              </div>

            )
          })
        }
      </div>
    </>
  );
}

export default UserPage;
