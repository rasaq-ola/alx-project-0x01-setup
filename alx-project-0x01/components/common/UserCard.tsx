import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
	return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <p className="text-gray-500 text-sm">{email}</p>
      <p className="text-gray-500 text-sm">{phone}</p>
      <p className="text-gray-500 text-sm">{website}</p>
      <p className="mt-4 text-sm italic">Company: {company.name}</p>
      <p className="text-sm">{address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
