import React, { useContext } from "react";
import { AuthContext } from "./authContext";
import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Products from "./components/Products";

function App(){
  const {isLoggedIn} = useContext(AuthContext)

  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={isLoggedIn ? <Products/> : <Navigate to="/login"></Navigate>}></Route>
        <Route path="*" element={<Navigate to="/login"/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;