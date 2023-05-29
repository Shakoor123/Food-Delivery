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
        <h2 className="cartMainTitle">
          {" "}
          {orders.length > 0 ? "Orders" : "Your Orders Is Empt"}
        </h2>
        {orders.length > 0 && (
          <table className="table">
            <thead>
              <tr className="titles">
                <th className="id">ID</th>
                <th className="pin">Address</th>
                <th className="place">Time</th>
                <th className="state">Phone</th>
                <th className="landmark">Price</th>
                {/* <th className="landmark">product</th> */}
                <th className="status">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="tbody">
                  <td>
                    <span className="mobileTitle">ID : </span>
                    {order._id}
                  </td>
                  <td>
                    <span className="mobileTitle">ADDRESS : </span>
                    {order.address.pin},{order.address.place},
                    {order.address.landmark};{order.address.pin}
                  </td>
                  <td>
                    <span className="mobileTitle">TIME : </span>
                    {order.createdAt}
                  </td>
                  <td>
                    <span className="mobileTitle">PHONE : </span>
                    {order.address.phone}
                  </td>
                  <td className="orderAmout">
                    <span className="mobileTitle">AMOUNT : </span>
                    {order.amount}
                  </td>
                  <td className="pending">
                    <span className="mobileTitle">STATUS : </span>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
