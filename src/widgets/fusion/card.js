import React from "react";

export default function Card({ label, children }) {
  return (
    <div>
      <h4>{label}:</h4>
      {children}
    </div>
  );
}
