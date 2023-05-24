import React from "react";
import { useAuth } from "../context/AuthProvider";

const PracticePapers = () => {
  const { user } = useAuth();

  return (
    <>
      <div style={{ fontSize: "24px" }}>
        Here are your practice papers {user.email}!
      </div>
    </>
  );
};

export default PracticePapers;
