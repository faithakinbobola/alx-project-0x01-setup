import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs }) => {
    return (
        <div className="w-4/5 rounded-xl  p-5 shadow-lg bg-white mx-auto" >
            <div className="pb-4">
                <h1 className="text-2xl font-bold">{name}</h1>
                <h2 className="text-gray-600">@{username}</h2>
                <p className="text-gray-500">{email}</p>
            </div>
            <table className="table-auto w-full bg-gray-100 rounded-lg border">
                <thead>
                    <tr>
                        <th className="font-bold p-2 text-left">Personal details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2 text-gray-500">Fullname:</td>
                        <td className="p-2 font-semibold">{name}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Email:</td>
                        <td className="p-2 font-semibold">{email}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Phone:</td>
                        <td className="p-2 font-semibold">{phone}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Website:</td>
                        <td className="p-2 font-semibold">{website}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Address:</td>
                        <td className="p-2 font-semibold">{street}, {suite} {city}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Zip:</td>
                        <td className="p-2 font-semibold">{zipcode}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Geo:</td>
                        <td className="p-2 font-semibold">{lat}, {lng}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Company:</td>
                        <td className="p-2 font-semibold">{companyName}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Company Catch Phrase:</td>
                        <td className="p-2 font-semibold">{catchPhrase}</td>
                    </tr>
                    <tr>
                        <td className="p-2 text-gray-500">Company B.S:</td>
                        <td className="p-2 font-semibold">{bs}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p>User Id: {id}</p>
            </div>
        </div>
    )
}

export default UserCard;