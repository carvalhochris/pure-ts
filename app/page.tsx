import Link from "next/link";
import { styles } from "./styles"
// import Users from "./components/Users";

export default function Home() {
  return (
    <>
      <div style={styles}>
        <h1>Welcome to Pure Typescript</h1>
        <p>An online resouce for typescript developers and enthusiasts</p>
        <p>coming soon...</p>
        <br />
        <p>Tech stack for this site:</p>
        <ul>
          <li>Next.js</li>
          <li>Prisma</li>
          <li>Postgres</li>
          <li>Vercel</li>
          <li>Heroku</li>
        </ul>
        <br />
        <code>
          const hello: string = {`"`}hello world{`"`}
        </code>
        <br />
        <br />
        <br />
        <u>
          <Link href="/resources">Resources</Link>
        </u>
        <br />
        {/* <Users /> */}
        <br />
        <u>
          <a href="https://github.com/carvalhochris/pure-ts" target="#">
            view repo
          </a>
        </u>
      </div>
    </>
  );
}

// const styles = {
//   margin: "auto", width: "70%", padding: "20px"
// }
