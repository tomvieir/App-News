import { GetStaticProps} from "next"
import Head from "next/head"
import { RichText } from "prismic-dom"
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
                    <div 
                       className={styles.postContent}

                        dangerouslySetInnerHTML={{__html: post.content}} //prismic trata a vulnerabilidade nesse caso
                    />
                    <p className={styles.author}>By: {post.author}</p>
                                      
                </article>
            </main>
        </>
    )
}

// export const getStaticPaths = () => {

//     return {
        
//     }   

// }

export const getStaticProps: GetStaticProps = async ( { params }) => { 
    
    const { slug } = params

    const prismic = getPrismicClient()

    const response = await prismic.getByUID<any>('my-custom-publication', String(slug), {
        fetch: ['publication.image'], 
    })

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
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
        }
    }

}