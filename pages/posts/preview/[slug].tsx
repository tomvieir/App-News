import { GetStaticPaths, GetStaticProps} from "next"
import { useSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import{ useRouter } from "next/router"
import { RichText } from "prismic-dom"
import { useEffect } from "react"
import { getPrismicClient } from "../../../src/services/prismic"
import styles from '../post.module.scss'

interface PostPreviewProps {
    post: {
        title: string,
        content: string,
        slug: string,
        updatedAt: string,
        author: string,
        image: {
            url: string
        }
    }
}

export default function PostPreview({ post }: PostPreviewProps) {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session?.activeSubscription) {
            router.push(`/posts/${post.slug}`)           
        }
    }, [session])

    return (
        <>  
            <Head>
                <title>{post.title} | AppNews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <img src={post.image.url} alt="" />
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <p className={styles.author}>By: {post.author}</p>
                    <div 
                       className={`${styles.postContent} ${styles.previewContent}`}

                        dangerouslySetInnerHTML={{__html: post.content}} //prismic trata a vulnerabilidade nesse caso
                    />
                    <div className={styles.continueReading}> 
                        <Link href='/'>
                            Wanna continue reading? Click here and subscribe now!
                        </Link>                      
                        
                    </div>                   
                </article>
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }   

}

export const getStaticProps: GetStaticProps = async ( { params } ) => { 
    
    const { slug } = params

    const prismic = getPrismicClient()

    const response = await prismic.getByUID<any>('my-custom-publication', String(slug), {
        fetch: ['publication.image'], 
    })

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 3)),
        author: response.data.author.find((author: { type: string; }) => author.type === 'paragraph')?.text ?? '',
        image: response.data.image,
       
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', { 
            day: '2-digit',
            month: 'long',
            year:'numeric'
        })
    }

    return {
        props: {
            post,
        },
        revalidate: 60*30 //30 min

    }

}