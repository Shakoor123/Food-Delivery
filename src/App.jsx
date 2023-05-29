import "./App.css";
import Slide from "./components/slide/Slide";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "./redux/userRedux";
function App() {
  const user = useSelector((state) => state.user).currentUser;
  const dispatch = useDispatch();
  useEffect(() => {
    const getOldUser = async () => {
      if (JSON.parse(localStorage.getItem("foodDelivery"))) {
        dispatch(loginUser(JSON.parse(localStorage.getItem("foodDelivery"))));
      }
    };
    getOldUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/slide" element={<Slide />} />
          <Route path="/cart" element={user ? <Cart /> : <Login />} />
          <Route path="/products" element={user ? <Products /> : <Login />} />
          <Route path="/orders/:uid" element={user ? <Orders /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
