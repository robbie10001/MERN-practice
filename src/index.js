import React from "react"; 
import ReactDOM from "react-dom";
import Mongoose from "mongoose"; 
import Mongo from "mongodb"; 
//import Express from "express";
//import Nodemon from "nodemon"; 
//we have identified that express and nodemon are preventing our application from rendering. 
import ReactrouterDOM from "react-router-dom";
import App from "./Components/App";


ReactDOM.render(
    <App />, 
document.querySelector("#root")
);

