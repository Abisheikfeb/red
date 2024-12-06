import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  // Handlers for opening and closing the form
  const handleOpenForm = () => setFormVisible(true);
  const handleCloseForm = () => setFormVisible(false);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Login Button */}
      <button
        onClick={handleOpenForm}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Login
      </button>

      {/* Conditionally render the RegisterForm Modal */}
      {isFormVisible && (
        <div className="flex  justify-center bg-gray-800 bg-opacity-50 z-50 border-2 border-red-400 rounded-2xl ">
          <div className="relative bg-white p-6 rounded-lg shadow-lg  max-w-80">
            {/* RegisterForm Component */}
            <RegisterForm />

            {/* Close Icon */}
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
