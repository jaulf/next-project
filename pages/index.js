import Layout from "../components/layout.js";
import utilStyles from "../styles/utills.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const blog = await fetch("https://jsonplaceholder.typicode.com/users");
  const blogPost = await blog.json();

  return {
    props: {
      blogPost
    }
  };
}

export default function Home({ blogPost }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>I'm a web developer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogPost.map(({ id, username, name }) => (
            <li className={utilStyles.listItem} key={username}>
              <Link href="/posts/[id]" as={`/posts/${username}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
