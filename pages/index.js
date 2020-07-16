import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}></section>
        <p>this is introduction.</p>
        <p>
          (This is a sample website - you'll be building a site like to this on{" "}
          )<a href="https://nextjs.org/learn"></a>
        </p>
      </Layout>
    </div>
  );
}
