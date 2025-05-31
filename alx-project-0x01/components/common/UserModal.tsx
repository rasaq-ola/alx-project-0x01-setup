import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="w-full mb-2 p-2 border rounded" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="w-full mb-2 p-2 border rounded" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="w-full mb-2 p-2 border rounded" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="w-full mb-2 p-2 border rounded" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="w-full mb-2 p-2 border rounded" />
          <input name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company Name" className="w-full mb-2 p-2 border rounded" />
          {/* Add more fields as you like */}
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
