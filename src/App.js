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
import ListUsers from "./view/Users/ListUsers.js";
import UserDetail from "./view/Users/UserDetail.js";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* router 6.x.x */}
          {/* <Routes>
              <Route index element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/about" element={<MyComponent />} />
              <Route path="/user" element={<ListUsers/>} exact/>
              <Route path="/user/:id" element={<UserDetail/>}/>
          </Routes> */}
          <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/todo"><ToDoList/></Route>
            <Route path="/about"><MyComponent/></Route>
            <Route path="/user" exact><ListUsers/></Route>
            <Route path="/user/:id"><UserDetail/></Route>
          </Switch>
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
