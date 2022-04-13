import { query as q } from 'faunadb';
import { fauna } from '../../../src/services/fauna';
import { stripe } from '../../../src/services/stripe';

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false
  ) {
    const userRef = await fauna.query(
      q.Select(
        "ref",
        q.Get(
          q.Match(
            q.Index("user_stripe_customer_id"),
            customerId
          )
        )
      )
    );
  
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  
    const subscriptionData = {
      id: subscription.id,
      userId: userRef,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id,
    }
  console.log(createAction);
    if (createAction) {
      await fauna.query(
        q.Create(
          q.Collection("subs"),
          { data: subscriptionData }
        )
      )
    } else {
      await fauna.query(
        q.Replace(
          q.Select(
            "ref",
            q.Get(
              q.Match(
                q.Index("subscription_by_id"),
                subscriptionId,
              )
            )
          ),
          { data: subscriptionData }
        )
      )
    }
  }