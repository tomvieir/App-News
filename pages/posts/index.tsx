import styles from './styles.module.scss';
import Head from 'next/head';
import { getPrismicClient } from '../../src/services/prismic';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

export default function Posts() {

    return (
        <>
            <Head>
                <title>Posts | AppNews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de abril de 2022</time>
                        <strong>dolor sit amet consectetur adipisicing elit</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni, ad quaerat fuga repellendus iste numquam reiciendis sequi</p>
                    </a>

                    <a href="">
                        <time>12 de abril de 2022</time>
                        <strong>dolor sit amet consectetur adipisicing elit</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni, ad quaerat fuga repellendus iste numquam reiciendis sequi</p>
                    </a>

                    <a href="">
                        <time>12 de abril de 2022</time>
                        <strong>dolor sit amet consectetur adipisicing elit</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni, ad quaerat fuga repellendus iste numquam reiciendis sequi</p>
                    </a>

                    <a href="">
                        <time>12 de abril de 2022</time>
                        <strong>dolor sit amet consectetur adipisicing elit</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni, ad quaerat fuga repellendus iste numquam reiciendis sequi</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'my-custom-publication'),
    ],  {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}