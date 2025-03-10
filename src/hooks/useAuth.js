import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  const login = (username, password) => {
    // Tài khoản ảo
    const fakeUser = {
      username: "user123",
      password: "password123",
    };

    if (username === fakeUser.username && password === fakeUser.password) {
      setIsLoggedIn(true);
      localStorage.setItem("userToken", "fakeToken"); // Lưu token vào localStorage
      return true; // Trả về true nếu đăng nhập thành công
    } else {
      alert("Invalid username or password");
      return false; // Trả về false nếu đăng nhập thất bại
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userToken"); // Xóa token khỏi localStorage
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;