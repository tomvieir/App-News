import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { stripe } from '../../src/services/stripe';


export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const session = await getSession({ req })

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
            //metadata
        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],  
            billing_address_collection: 'required', //para obrigar o usuario a digitar o endereco
            line_items: [
                {price: 'price_1KkvTIKPePQDBPOfUzrdYFLL', quantity: 1},
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })

        return res.status(200).json({
            sessionId: stripeCheckoutSession.id
        })

    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}