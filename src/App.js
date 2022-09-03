import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Hotels from "./pages/Hotels";
import "./styles/css/style.css";
function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </div>
  );
}

export default App;
