import React from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";

const  App = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
