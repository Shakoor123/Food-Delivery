import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Orders.css";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Orders() {
  const { uid } = useParams();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/orders/find/${uid}`
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserOrders();
  }, [uid]);

  return (
    <div className="home">
      <div className="homeNavWrapper">
        <div className="homeWrapper">
          <Navbar />
        </div>
      </div>
      <div className="homeWrapper">
        <h2 className="cartMainTitle">Orders</h2>
        {orders.length > 0 && (
          <table className="table">
            <thead>
              <tr className="titles">
                <th className="id">ID</th>
                <th className="pin">Adress</th>
                <th className="place">Time</th>
                <th className="state">Phone</th>
                <th className="landmark">Price</th>
                {/* <th className="landmark">product</th> */}
                <th className="status">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order.address.pin},{order.address.place},
                    {order.address.landmark};{order.address.pin}
                  </td>
                  <td>{order.createdAt}</td>
                  <td>{order.address.phone}</td>
                  <td>{order.amount}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
