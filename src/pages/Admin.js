import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import { db } from "../utils/config";
import "../assets/styles/admin.css";
const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState(0);

  const handlePasswordSubmit = (password) => {
    if (parseInt(password, 10) === pin) {
      setIsAuthenticated(true);
      getOrders();
    } else {
      console.log("Incorrect password. Please try again.");
    }
  };

  const getOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "voiceovers"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setOrders(docs);
    console.log(docs);
  };
  const getPin = async () => {
    const querySnapshot = await getDocs(collection(db, "pin"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setPin(docs[0].pin);
  };

  useEffect(() => {
    console.log("Component loaded");
    getPin();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="page-content admin-container">
        <div className="password-container">
          <p>Enter PIN</p>
          <HStack>
            <PinInput onChange={handlePasswordSubmit}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return <div className="no-orders">No orders</div>;
  }

  return (
    <div className="page-content admin-container">
      <div className="content-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Timestamp</th>
              <th>Status</th>
              <th>Script</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td data-label="ID">{order.id}</td>
                <td data-label="Email">{order.email}</td>
                <td data-label="Timestamp">
                  {order.createdAt.toDate().toLocaleString()}
                </td>
                <td data-label="Status">{order.paymentStatus}</td>
                <td data-label="Script">{order.script}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
