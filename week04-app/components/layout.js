import Head from 'next/head';
import link from 'next/link';
export default function Layout({children, home}) {
    return(
        <div>
            <Head>
                <title>
                    Seth's Week 4 App
                </title>
                <link rel="icon" href="https://d39aw01fjrqpws.cloudfront.net/favicon.png" />
            </Head>
            <header>
                <nav>
                    <a href="https://spiritualintelligencebook.com/"></a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <Link href="/" className="btn btn-primary">
                    Back to home
                </Link>
                
            )
            
            }
            <footer>
               <p>Footer</p> 
            </footer>
        </div>
    );
}