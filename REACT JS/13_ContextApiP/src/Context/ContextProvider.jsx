import React, { useState } from 'react';
import userContext from './UserContext';

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");
  // const [address, setAddress] = useState("");
  // const [DOB, setDOB] = useState("");
  // const [F_name, setF_name] = useState("");
  // const [L_name, setL_name] = useState("");

  return (
    <userContext.Provider value={{ 
        user, setUser,
        // email, setEmail,
        // contact, setContact,
        // address, setAddress,
        // DOB, setDOB,
        // F_name, setF_name,
        // L_name, setL_name
      }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
