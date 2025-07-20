import { UserProps, UserModalProps } from "@/interfaces";
import { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserProps>({
        id: 1,
        name: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        lat: "",
        lng: "",
        phone: "",
        website: "",
        companyName: "",
        catchPhrase: "",
        bs: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center overflow-y-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md my-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">User ID</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Fullname</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="text" 
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Street</label>
                        <input 
                            type="text" 
                            id="street"
                            name="street"
                            value={user.street}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Suite</label>
                        <input 
                            type="text" 
                            id="suite"
                            name="suite"
                            value={user.suite}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">City</label>
                        <input 
                            type="text" 
                            id="city"
                            name="city"
                            value={user.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Zipcode</label>
                        <input 
                            type="text" 
                            id="zipcode"
                            name="zipcode"
                            value={user.zipcode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Address Latitude</label>
                        <input 
                            type="text" 
                            id="lat"
                            name="lat"
                            value={user.lat}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Address Longtitude</label>
                        <input 
                            type="text" 
                            id="lng"
                            name="lng"
                            value={user.lng}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input 
                            type="text" 
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Website URL</label>
                        <input 
                            type="text" 
                            id="website"
                            name="website"
                            value={user.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input 
                            type="text" 
                            id="companyName"
                            name="companyName"
                            value={user.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
                        <input 
                            type="text" 
                            id="catchPhrase"
                            name="catchPhrase"
                            value={user.catchPhrase}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">B.S.</label>
                        <input 
                            type="text" 
                            id="bs"
                            name="bs"
                            value={user.bs}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserModal