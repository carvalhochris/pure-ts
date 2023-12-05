import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const ResourceList = async () => {
  const prisma = new PrismaClient();
  const resources = await prisma.resource.findMany();

  return (
    <>
      {resources.map((resource) => (
        <div key={resource.id}>
          <Link href={resource.link} target="_blank">
            <p>{resource.name}</p>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ResourceList;
