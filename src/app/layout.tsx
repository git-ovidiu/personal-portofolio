import './globals.css';
import '../styles/main.module.scss';
import '../styles/bootstrap/css/bootstrap-grid.css';
import { Outfit } from 'next/font/google';
import styles from '../styles/main.module.scss';

import Head from 'next/head';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    title: 'Bunghez Ovidiu',
    description: "My name is Ovidiu Bunghez and I'm a web developer."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            {/* Add other meta tags or link tags if needed */}
            <link rel="icon" href="/public/resume16.png" />
        </Head>
        <body className={styles['styleguide']}>
        <div className={outfit.className}>
            {children}
        </div>
        </body>
        </html>
    )
}
