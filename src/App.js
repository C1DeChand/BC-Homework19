import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./components/home"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
