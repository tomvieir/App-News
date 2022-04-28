
import styles from '../styles/Home.module.scss'
import  Head from 'next/head'
import { SubscribeButton } from '../src/components/SubscribeButton'

import { GetStaticProps } from 'next'
import { stripe } from '../src/services/stripe'

interface HomeProps{
  product:{
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | App.News</title>
      </Head>

      <main className={styles.Main}>
        <img src="/images/img.svg" alt="coding img" />
        <section>
          <h6>
            Hey, welcome 
          </h6>

          <br />

          <h1>News about <br />
            the <span>Tec</span> world 
          </h1>

          <h6>Get acess to all publications <br />
            <span>for {product.amount} month</span>
          </h6>

          

          <SubscribeButton priceId={product.priceId}/>

        </section>

        
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KkvTIKPePQDBPOfUzrdYFLL')

  const product = {
    priceId : price.id,
    amount : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(price.unit_amount / 100)
   
  }

  return {
    props: {
      product,
      revalidate: 60 * 60 * 24 //24 horas
    }
  }
}
