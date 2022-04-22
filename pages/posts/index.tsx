import styles from './styles.module.scss';
import Head from 'next/head';
import { getPrismicClient } from '../../src/services/prismic';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Link from 'next/link';


type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
    author: string;
    image: {
        url: string;
    }
    
}

interface PostsProps {
    posts: Post[]
}

export default function Posts( { posts }: PostsProps ) {

    return (
        <>
            <Head>
                <title>Posts | AppNews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    { posts.map(post => (
                    <Link href={`/posts/${post.slug}`}>
                        <a key={post.slug}  href="">
                            <img src={post.image.url} alt="" />
                            <strong>{post.title}</strong>
                            <time>{post.updatedAt}</time>
                            <p className={styles.author}>By: {post.author}</p>                          
                            <p>{post.excerpt}</p>                           
                        </a>
                    </Link>
                    ))}

                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.Predicates.at('document.type', 'my-custom-publication'),
    ],  {
        fetch: ['publication.title', 'publication.content', 'publication.image'],
        pageSize: 100,
    })

    const posts = response.results.map(post =>{
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find((content: { type: string; }) => content.type === 'paragraph')?.text ?? '',
            author: post.data.author.find((author: { type: string; }) => author.type === 'paragraph')?.text ?? '',
            image: post.data.image,

            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', { 
                day: '2-digit',
                month: 'long',
                year:'numeric'
            })

        }
    })

    // console.log(JSON.stringify(posts, null, 2))

    return {
        props: {
            posts
        }
    }
}
