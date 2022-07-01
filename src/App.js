import React, { useState } from "react";
import './css/E-A-S Styles.css';
import GridSquare from "./components/E-A-S Components/GridSquare";
import GridSizeBtn from "./components/E-A-S Components/GridSizeBtn";

function App() {
    

return(
<div>
    <h1>Etch-A-Sketch!</h1>
    <div className="btnArea">
            <GridSizeBtn/>
    </div>
    <div className="stage">        
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        <GridSquare/>
        
    </div>
</div>
    
    
)
}
export default App;
