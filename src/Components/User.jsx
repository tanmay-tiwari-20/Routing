import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-zinc-600 text-5xl mb-3">User</h1>

      <div className="flex w-1/2 flex-col mt-5">
        <Link
          className="p-3 rounded-md text-white bg-zinc-400 text-2xl mb-3 hover:bg-zinc-600"
          to="/user/john"
        >
          John
        </Link>
        <Link
          className="p-3 rounded-md text-white bg-zinc-400 text-2xl mb-3 hover:bg-zinc-600"
          to="/user/ayush"
        >
          Ayush
        </Link>
        <Link
          className="p-3 rounded-md text-white bg-zinc-400 text-2xl mb-3 hover:bg-zinc-600"
          to="/user/anubhav"
        >
          Anubhav
        </Link>
      </div>
    </div>
  );
};

export default User;
