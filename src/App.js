import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Hotels from "./pages/Hotels";
import "./styles/css/style.css";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotels/:id" element={<Hotel />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </SearchContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
