import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Result from "@/components/Result";
import requests from "@/utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }) {
    return (
        <>
            <Head>
                {/* <title>Hulu</title> */}
                <meta
                    name='description'
                    content='Hulu Platforme Streming Movies && Series'
                />
            </Head>
            <Header />
            <Nav />
            <Result results={results} />
        </>
    );
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const request = await fetch(
        `https://api.themoviedb.org/3${
            requests[genre]?.url || requests.fetchTrending.url
        }`
    ).then((res) => res.json());

    return {
        props: {
            results: request.results,
        },
    };
}
