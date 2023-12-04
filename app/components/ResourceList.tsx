import { PrismaClient } from "@prisma/client";

const fetchResources = async () => {
  const res = await fetch("https://puretypescript.com/resources.json");
  const jay = await res.json();
  console.log(jay);
  return jay;
};

const ResourceList = async () => {
  // const data = await fetchResources();
  const prisma = new PrismaClient();

  const resources = await prisma.resource.findMany();

  return (
    <>
      {resources.map((resource) => (
        <div key={resource.id}>
          <a href={resource.link} target="#">
            <p>{resource.name}</p>
          </a>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ResourceList;
