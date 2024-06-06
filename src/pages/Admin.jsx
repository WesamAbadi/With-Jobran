import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/config";
import "../style/admin.css";

const Admin = () => {
  const [orders, setOrders] = useState([]);

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
    getOrders();
    console.log("test");
  }, []);

  if (orders.length === 0) {
    return <div className="no-orders">No orders</div>;
  }
  return (
    <div className=" page-content admin-container">
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
