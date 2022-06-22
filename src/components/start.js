import React from "react";

const shoot = () =>{
    alert("cool")
}
const StartComp = props => (
    <div>
        <h1>Arkham Horror</h1>
        <button onClick={shoot}>Doom Awaits</button>
    </div>
    
    
    
);

export default StartComp;