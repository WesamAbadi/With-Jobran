import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/config";
import CardIcon from "../assets/images/credit-card.svg";
import ProductImage from "../assets/images/product-image.png";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const Checkout = () => {
  const [isLoading, setLoading] = useState(false);
  const [script, setScript] = useState("");
  const [email, setEmail] = useState("");

  const item = {
    price: "price_1PNcYe2NzfYu6JEESyJ3zgNW",
    quantity: 1,
  };

  const handleCheckout = async (checkoutOptions) => {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!script || !email) {
      alert("Please provide a script and email");
      return;
    }

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "voiceovers"), {
        script,
        email,
        createdAt: serverTimestamp(),
        paymentStatus: "initial/unknown",
      });

      const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success?docId=${docRef.id}`,
        cancelUrl: `${window.location.origin}/cancel?docId=${docRef.id}`,
      };

      await handleCheckout(checkoutOptions);
    } catch (err) {
      console.error("Error submitting script and email:", err);
      alert("Error submitting script and email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="checkout content-wrapper">
        <p className="checkout-title">تعليق صوتي إحترافي</p>
        <p className="checkout-description">إحصل على نصك الخاص</p>
        <h1 className="checkout-price">$9.99</h1>
        <img
          className="checkout-product-image"
          src={ProductImage}
          alt="Product"
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> البريد الالكتروني</label>
          <div className="notes">
            <p>** تأكد من إدخال نفس البريد المستخدم في خطوة الدفع التالية</p>
            <p>** سيتم إرسال الملف الصوتى الى هذا العنوان</p>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الالكتروني"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <label htmlFor="script">
            ضع رابط النص أو أدخل النص الخاص بك كاملاً
          </label>
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder=" ضع رابط النص أو أدخل النص الخاص بك كاملاً"
            rows={4}
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
              <p className="text">{isLoading ? "Loading..." : "إلى الدفع"}</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
