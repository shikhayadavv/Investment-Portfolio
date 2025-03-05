import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./app/Home";
import AuthLogin from "./app/AuthLogin";
import AuthRegister from "./app/AuthRegister";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/register" element={<AuthRegister />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
