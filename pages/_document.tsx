import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Mydocument extends Document {
    render() {
        return (
            
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}