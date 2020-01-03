import React from "react";
import Welcome from "./Welcome";
import List from "./List"; 


const App = () => {
    return (
        <>
            <div>
                <h1><Welcome/></h1>
                <div>
                    <h2><List/></h2>

                </div>
            </div>
        </>


    );
};

export default App;