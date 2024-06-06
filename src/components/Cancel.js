import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/config";
import "../style/cancel.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Cancel = () => {
  const query = useQuery();
  const docId = query.get("docId");

  useEffect(() => {
    const updatePaymentStatus = async () => {
      if (docId) {
        try {
          const docRef = doc(db, "voiceovers", docId);
          await updateDoc(docRef, { paymentStatus: "canceled" });
        } catch (error) {
          console.error("Error updating payment status:", error);
        }
      }
    };

    updatePaymentStatus();
  }, [docId]);

  return (
    <div className="cancel-container">
      <h1 className="cancel-heading">Cancel</h1>
      <h2 className="cancel-message">Your payment was canceled.</h2>
      <a href="/">Return Home</a>
    </div>
  );
};

export default Cancel;