import '../styles/main.scss';
import { Roboto } from 'next/font/google';
import Layout from '../components/Layout.jsx';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                    letter-spacing: 0.3px;
                }
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
