import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Review from "./pages/Review.tsx";
import Navbar from "./components/Navbar.tsx";
function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
