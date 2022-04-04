
import styles from '../styles/Home.module.scss'
import  Head from 'next/head'
import { SubscribeButton } from '../src/components/SubscribeButton'

import { GetServerSideProps } from 'next'
import stripe from 'stripe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | App.News</title>
      </Head>

      <main className={styles.Main}>
        <section>
          <h6>
            Hey, welcome 
          </h6>

          <br />

          <h1>News about <br />
            the <span>React</span> world 
          </h1>

          <h6>Get acess to all publications <br />
            <span>for $9.90 month</span>
          </h6>

          

          <SubscribeButton />

        </section>

        <img src="/images/avatar.svg" alt="coding img" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.price

  return {
    props: {
      name: 'John Doe',
    }
  }
}
