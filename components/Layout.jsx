// import Sidebar from '../components/Sidebar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
    const router = useRouter();
    const [title, setTitle] = useState('');

    // const NeedLayout = () => router.pathname === '/';

    return (
        <>
            <Head>
                <title>Immortals</title>
                <meta
                    name="description"
                    content="This website was created by Guy Barda"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* {NeedLayout() ? (
                <> */}
            <main className="home-container">
                <Navbar />
                <section className="main-container">{children}</section>
            </main>
            <Toaster position="bottom-center" />
            {/* </>
            ) : (
                children
            )} */}
        </>
    );
}
