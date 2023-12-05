import Link from "next/link";
import ResourceList from "../components/ResourceList";
import { styles } from "../styles"

const ResourcesPage = () => {
  return (
    <>
    <div style={styles}>
      <br />
      <h1>The Resources</h1>
      <br />
      <br />
      <ResourceList />
      <br />
      <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default ResourcesPage;
