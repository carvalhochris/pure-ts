import Link from "next/link";
import ResourceList from "../components/ResourceList";

const ResourcesPage = () => {
  return (
    <>
      <br />
      <h1>The Resources</h1>
      <br />
      <br />
      <ResourceList />
      <br />
      <Link href="/">Home</Link>
    </>
  );
};

export default ResourcesPage;
