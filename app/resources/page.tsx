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

// const styles = {
//   margin: "auto", width: "70%", padding: "20px"
// }

export default ResourcesPage;
