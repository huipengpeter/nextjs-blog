import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout";
// import Script from "next/script";

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
            {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        </Head>
        {/* <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => console.log(`script loaded correctly, window. FB has been populated`)}/> */}
        <div>
        <h1>First Post</h1>
        <p>This is my first post in Next.js!</p>
        <h2><Link href="/">Back to home</Link></h2>
        </div>
    </Layout>
    );
    }