import { PrismaClient } from "@prisma/client";

interface UserProps {
  id: number;
  name: string;
}

interface UsersProps {
  user: UserProps[];
}

const Users = async () => {
  const prisma = new PrismaClient();
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });

  const users = await prisma.user.findMany();

  return (
    <>
      users
      {users.map((data) => (
        <div key={data.id}>
          <p>{data.name}</p>
        </div>
      ))}
    </>
  );
};

export default Users;
