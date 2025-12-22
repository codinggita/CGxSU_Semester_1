import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./Test";
import Error from "./Error";
import { BrowserRouter as Neel,Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>    
    Test
    <Neel>
     Nabbar
     Sidebar
    <Routes>
    <Route path="/" element={<Test/>} />
    <Route path="/react/:restro_name" element={<>React Dynamic routing</>} />
    <Route path="/react/sub/details" element={<>React</>} />
    <Route path="/error" element={<Error/>}/>
    <Route path="/link" element={<><Link to="/">Home</Link></>} />
    <Route path="/navlink" element={<><NavLink to="/link">NavLink</NavLink></>} />
    <Route path="/*" element={<><Navigate to="/error" /></>} />
    {/* useHistory */}
    {/* <App /> */}
    {/* <Test /> */}
    </Routes>
    Footer

    </Neel>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
