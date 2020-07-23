/* import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { loadStripe } from "@stripe/stripe-js";
import CardCheckout from "components/plan-component";

const StripeCheckout = () => {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISH_KEY);

  const data = useStaticQuery(graphql`
    query queryPlan {
      allStripePlan {
        edges {
          node {
            id
            nickname
            amount
            interval
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Stripe Checkout</h1>
      <main
        style={{
          display: "grid",
          padding: "2em",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
          placeContent: "center",
          gridGap: "2em",
          fontSize: "20px",
        }}
      >
        {data.allStripePlan.edges.map(item => (
          <CardCheckout
            data={item.node}
            key={item.node.id}
            stripePromise={stripePromise}
          />
        ))}
      </main>
    </div>
  );
};

export default StripeCheckout;
 */
