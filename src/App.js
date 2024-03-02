import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./UserFile/Login/Login";
import Signup from "./UserFile/Signup/Signup";
import { CartProvider } from "./Context/ContextReducer";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Sign Up Route for register */}
          <Route path="/createuser" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
