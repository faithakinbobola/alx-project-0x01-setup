import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces"

const Users: React.FC<UserProps[]> = ({ posts }) => {
    console.log(posts);
    
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="grid grid-cols-2 gap-6">
                    {
                        posts.map(({ id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs }: UserProps, key: number) => (
                            <UserCard name={name} username={username} email={email} street={street} suite={suite} city={city} zipcode={zipcode} lat={lat} lng={lng} phone={phone} website={website} companyName={companyName} catchPhrase={catchPhrase} bs={bs} id={id} key= {key} />
                        ))
                    }
                </div>
            </main>
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