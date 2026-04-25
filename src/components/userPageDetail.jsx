import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"
import './style.css'


function UserPageDetails() {
  let params = useParams();

  console.log(params);

  let [userDetail, setuserDetails] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userIdDetails}`)
      .then((response) => response.json())
      .then((json) => {
        setuserDetails(json);
      });
  }, []);
  return (
    <>
      <div className="flex">
        <h1 className="heading">User Details</h1>
        <Navbar />
      </div>
      {userDetail != undefined ? (
        <section className="user-page">

          <div className="user-card">

            <h1 className="user-name">{userDetail.name}</h1>
            <p className="username">{userDetail.username}</p>

            <div className="user-info">
              <div><strong>Email:</strong> {userDetail.email}</div>
              <div><strong>Phone:</strong> {userDetail.phone}</div>
              <div><strong>Website:</strong> {userDetail.website}</div>
            </div>

            <div className="user-section">
              <h3>Address</h3>
              <p><strong>Street:</strong> {userDetail.address.street}</p>
              <p><strong>City:</strong>  {userDetail.address.city}</p>
              <p><strong>Zipcode:</strong>  {userDetail.address.zipcode}</p>
            </div>

            <div className="user-section">
              <h3>Company</h3>
              <p> <strong> Name:</strong> {userDetail.company.name}</p>
              <p><strong>Role:</strong>  {userDetail.company.bs}</p>
            </div>

          </div>

        </section>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default UserPageDetails;
