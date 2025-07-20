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
                        posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                            <UserCard name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} id={id} key={key} />
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