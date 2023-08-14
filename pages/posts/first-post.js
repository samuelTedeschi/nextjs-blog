import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Primero Post</title>
            </Head>
            <h1>Primero Post</h1>
            <h2>
                <Link href="/">voltar para a home</Link>
            </h2>
        </Layout>
    )
}