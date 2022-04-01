
import styles from '../styles/Home.module.scss'
import  Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | App.News</title>
      </Head>

      <main className={styles.Main}>
        <section>
          <h4>
            hey welcome 
          </h4>

          <h1>News about <br />
            the <span>React</span> world 
          </h1>

          <h5>Get acess to all publications <br />
            <span>for $9,90 month</span>
          </h5>

          <button type="button"> Subscribe now</button>

        </section>

        <img src="/images/avatar2.svg" alt="coding img" />
      </main>
    </>
  )
}
