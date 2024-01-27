import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./view/test/MyComponent.js";
import ToDoList from "./view/ToDoList.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./view/nav/Nav.js";
import Home from "./view/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/about" element={<MyComponent />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
