import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // Assuming you have your Firebase configuration set up
import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.png";
import "../styles.css";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [script, setScript] = useState("");
  const [email, setEmail] = useState("");

  const item = {
    price: "price_1PNcYe2NzfYu6JEESyJ3zgNW",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!script || !email) {
      alert("Please provide a script and email");
      return;
    }

    setLoading(true);

    try {
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout(checkoutOptions);
      if (error) {
        setStripeError(error.message);
      } else {
        // Payment succeeded, store script and email in Firestore
        await addDoc(collection(db, "voiceovers"), {
          script,
          email,
          createdAt: serverTimestamp(),
        });
        alert("Payment and script submission successful!");
      }
    } catch (err) {
      console.error("Error submitting script and email:", err);
      alert("Error submitting script and email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <p className="checkout-title">Voice Over Service</p>
      <p className="checkout-description">Get your new voice over today!</p>
      <h1 className="checkout-price">$9.90</h1>
      <img className="checkout-product-image" src={ProductImage} alt="Product" />
      <form onSubmit={handleSubmit}>
        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Enter your script here..."
          rows={4}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <button
          className="checkout-button"
          type="submit"
          disabled={isLoading}
        >
          <div className="grey-circle">
            <div className="purple-circle">
              <img className="icon" src={CardIcon} alt="credit-card-icon" />
            </div>
          </div>
          <div className="text-container">
            <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Checkout;