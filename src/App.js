import React, {Component} from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
