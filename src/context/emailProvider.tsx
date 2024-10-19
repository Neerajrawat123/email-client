// EmailContentContext.js

import React, { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const EmailContext = createContext(null);

// Create a provider component
export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  const getData = async (id) => {
    const response = await axios.get(
      `https://flipkart-email-mock.now.sh/?id=${id}`,
    );
    return response.data.body; // Use response.data instead of response.body
  };

  const updateEmail = async (id, data) => {
    const content = await getData(id);
    setEmail({ content: content, ...data });
    console.log(email);
  };

  return (
    <EmailContext.Provider value={{ email, updateEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

// Custom hook to use the EmailContext
