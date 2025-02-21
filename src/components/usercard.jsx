// write the component code here
import React from "react";

const Usercard=()=>{
    const profilePhoto="user_photo";
    const name="Vansh";
    const email="vansh@gamil.com";
    const phone ="9876543210";
    const address="qwertyu";

return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-300 p-4">
      <img
        src={profilePhoto}
        alt="User Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
      />
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <p className="text-gray-600 text-center">{email}</p>
      <p className="text-gray-600 text-center">{phone}</p>
      <p className="text-gray-500 text-sm text-center">{address}</p>
    </div>
  );
};

export default Usercard;