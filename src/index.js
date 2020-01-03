import React from "react"; 
import ReactDOM from "react-dom";
import Mongoose from "mongoose"; 
import Mongo from "mongodb"; 
//import Express from "express";
//import Nodemon from "nodemon"; 
//we have identified that express and nodemon are preventing our application from rendering. 
import ReactrouterDOM from "react-router-dom";





const App = () => {
    return (
        <div className="ui container comments">
   
                <div>
                    <h4>Warning</h4>
                Are you sure you want to do this?
                </div>
                author="Sam" 
                timeAgo="Today at 4.45pm" 
                comment="What a world!"
                avatar
                //note props are passed like in the above code.
  
          
        </div>
    );
};




ReactDOM.render(<App />, document.querySelector("#root"))
