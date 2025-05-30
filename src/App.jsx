import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";
import CategoryPage from "./components/CategoryPage";
import ItemList from "./components/ItemList";

import items from "./mockData/items.json";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/eSTORE/">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/" element={<ItemList items={items} />} />

          {/* Category pages like /category/women */}
          <Route
            path="/category/:categoryName"
            element={<CategoryPage items={items} />}
          />

          {/* Fallback */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />

          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
