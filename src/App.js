import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { openRoutes, closedRoutes } from "./Configs/Routes";
import { useSelector, useDispatch } from "react-redux";
import { saveLoggedInUser } from "./Redux/Reducers/Authentication.reducer";

function App() {
  const dispatcher = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const token = sessionStorage.getItem('_tk')

  useEffect(() => {
    console.log("Token", token)
    dispatcher(saveLoggedInUser({ token }))
  }, [token]);

  return (
    <div className="App">
      <Routes>
        {isLoggedIn
          ? closedRoutes.map((route) => (
              <Route path={route.path} element={route.Component} />
            ))
          : openRoutes.map((route) => (
              <Route path={route.path} element={route.Component} />
            ))}
      </Routes>
    </div>
  );
}

export default App;
