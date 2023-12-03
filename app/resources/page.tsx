import Link from "next/link";
import ResourceList from "../components/ResourceList";
import styles from "app/page.module.css";

const ResourcesPage = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>The Resources</h1>
        <br />
        <br />
        <ResourceList />
        <br />
        <Link href="/">Home</Link>
      </main>
    </>
  );
};

export default ResourcesPage;
