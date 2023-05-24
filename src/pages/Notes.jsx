import React from "react";
import { useAuth } from "../context/AuthProvider";

const Notes = () => {
  const { user } = useAuth();

  return (
    <>
      <div style={{ fontSize: "24px" }}>Here are your notes {user.email}!</div>
    </>
  );
};

export default Notes;
