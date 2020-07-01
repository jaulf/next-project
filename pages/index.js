import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>Hello Babes!</h1>
      Read{" "}
      <Link href="/posts/first-post">
        <a>this post!</a>
      </Link>
    </div>
  );
}
