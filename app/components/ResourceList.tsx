const fetchResources = async () => {
  const res = await fetch("https://puretypescript.com/resources.json");
  const jay = await res.json();
  console.log(jay);
  return jay;
};

const ResourceList = async () => {
  const data = await fetchResources();

  return (
    <>
      {data.map((item: { id: number; title: string; link: string }) => (
        <div key={item.id}>
          <a href={item.link} target="#">
            <p>{item.title}</p>
          </a>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ResourceList;
