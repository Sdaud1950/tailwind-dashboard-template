import React from "react";
import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <TbError404 className="text-red-500 text-9xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
