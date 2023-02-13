import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="h_logo">Chat</span>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14446269/pexels-photo-14446269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};
