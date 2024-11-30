import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

import './components/Header.css';
import './components/Footer.css';
import './components/ProductListing.css';
import './components/Section.css';


function App() {
  return (
    
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
