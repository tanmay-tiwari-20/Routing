import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const GoBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-zinc-600 text-5xl mb-3">User Detail</h1>
      <h1 className="text-2xl mt-3 text-zinc-600">Hi! {name}</h1>
      <button
        onClick={GoBackHandler}
        className="mt-5 px-3 py-1 text-white bg-zinc-600 rounded-full"
      >
        Back
      </button>
    </div>
  );
};

export default UserDetail;
