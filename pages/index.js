import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/8.png" />
      </Head>
      <h1>Hello Babes!</h1>
      Read{" "}
      <Link href="/posts/first-post">
        <a>this post!</a>
      </Link>
    </div>
  );
}
