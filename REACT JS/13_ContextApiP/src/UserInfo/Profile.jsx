import { useContext } from "react"
import React  from 'react'
import userContext from "../Context/UserContext"

const Profile = () => {
  const {user}=useContext(userContext)
  
   if(!user){
    return <p>No user Available</p>
   }
   return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.userName}</p>
      <p>Email: {user.email}</p>
      <p>Contact: {user.contact}</p>
      <p>Address: {user.address}</p>
    </div>
  );
  
}

export default Profile
