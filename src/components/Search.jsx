import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14446269/pexels-photo-14446269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Bobby</span>
        </div>
      </div>
    </div>
  );
};
