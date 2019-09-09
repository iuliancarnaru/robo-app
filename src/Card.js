import React from "react";

function Card({ id, name, username, email }) {
  return (
    <div
      style={{
        border: "1px solid grey",
        display: "inline-block",
        marginRight: "10px",
        marginBottom: "10px",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <img src={`https://robohash.org/${id}?100x100`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{username}</p>
    </div>
  );
}

export default Card;
