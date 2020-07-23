/* import React from "react";

const CardCheckout = ({ data, stripePromise }) => {
  const redirectToCheckout = async (event, plan, quantity = 1) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan, quantity }],
      successUrl: `${window.location.origin}/register`,
      cancelUrl: `${window.location.origin}/pokerify-checkout`,
    });
    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <section
      style={{
        padding: "2em",
        backgroundColor: "whitesmoke",
      }}
    >
      <h5>{data.nickname}</h5>
      <p>Subscription Time: {data.interval}</p>
      <h5>€ {data.amount / 100}</h5>
      <button
        onClick={event => redirectToCheckout(event, data.id)}
        style={{ border: "none", padding: "1em", cursor: "pointer" }}
      >
        Select Plan
      </button>
    </section>
  );
};

export default CardCheckout;
 */
