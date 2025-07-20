import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces"
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserProps | null>(null);

    const handleAddUser = (nweUser: UserProps) => {
        setUser({...nweUser, id: posts.length + 1})
    }
    
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">User Information</h1>
                    <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {
                        posts.map(({ id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs }: UserProps, key: number) => (
                            <UserCard name={name} username={username} email={email} street={street} suite={suite} city={city} zipcode={zipcode} lat={lat} lng={lng} phone={phone} website={website} companyName={companyName} catchPhrase={catchPhrase} bs={bs} id={id} key= {key} />
                        ))
                    }
                </div>
            </main>

            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
            )}
        </div>
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;