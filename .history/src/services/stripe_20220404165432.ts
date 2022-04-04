import Stripe from 'stripe'


export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-03-02',
        appInfo: {
            name: 'App.news',
            version: '.1.0',
        }
    }
)