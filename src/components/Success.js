import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/config";
import "../style/success.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Success = () => {
  const query = useQuery();
  const docId = query.get("docId");

  useEffect(() => {
    const updatePaymentStatus = async () => {
      if (docId) {
        try {
          const docRef = doc(db, "voiceovers", docId);
          await updateDoc(docRef, { paymentStatus: "paid" });
        } catch (error) {
          console.error("Error updating payment status:", error);
        }
      }
    };

    updatePaymentStatus();
  }, [docId]);
  return (
    <div className="success-container">
      <h1 className="success-heading">Success</h1>
      <h2 className="success-message">Thank you for your purchase!</h2>
      <a href="/">Return Home</a>
    </div>
  );
};

export default Success;
