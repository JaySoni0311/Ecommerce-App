import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
