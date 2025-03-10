import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Customization from "./pages/Customization";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUpLogInForm from "./pages/SignUp_LogIn";
import { AuthProvider, useAuthContext } from "./context/AuthProvider";

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<SignUpLogInForm />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute
                element={
                  <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/customization" element={<Customization />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/order-tracking" element={<OrderTracking />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                }
              />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
