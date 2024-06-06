import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/config";
import "../style/admin.css";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "root";

  const handlePasswordSubmit = (password) => {
    if (password === correctPassword) {
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

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="page-content admin-container">
        <div className="password-container content-wrapper">
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            onChange={(e) => {
              handlePasswordSubmit(e.target.value);
            }}
            placeholder="Enter password"
          />
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
