import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';


const Layout = ({children, title}) =>{
    return (
        <div className="root">
            <Head>
                <title>{`${title}`}</title>
            </Head>

            <h1>{title}</h1>
            {children}
            <footer>&copy; {new Date().getFullYear()}</footer>
        </div>
    )
}

export default Layout
