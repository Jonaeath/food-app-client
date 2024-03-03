import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./UserFile/Login/Login";
import Signup from "./UserFile/Signup/Signup";
import { CartProvider } from "./Context/ContextReducer";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Sign Up Route for register */}
          <Route path="/createuser" element={<Signup />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
