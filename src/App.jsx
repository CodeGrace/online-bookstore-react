import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";
import CheckOut from "./pages/CheckOut";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} /> 
      </Routes>
    </>
  );
}

export default App;
