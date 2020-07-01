import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App | Posts</title>
        </Head>
        <h1>What's up </h1>
        <Link href="../">
          <a>Back home!</a>
        </Link>
      </Layout>
    </>
  );
}
