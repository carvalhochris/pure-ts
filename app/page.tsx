import Link from "next/link";

export default function Home() {
  return (
    <>
      <br />
      <h1>Welcome to Pure Typescript</h1>
      <br />
      <p>An online resouce for typescript developers and enthusiasts</p>
      <br />
      <p>coming soon...</p>
      <br />
      <code>
        const hello: string = {`"`}hello world{`"`}
      </code>
      <br />
      <br />
      <u>
        <Link href="/resources">Resources</Link>
      </u>
      <br />
      <br />
      <u>
        <a href="https://github.com/carvalhochris/pure-ts" target="#">
          view repo
        </a>
      </u>
    </>
  );
}
