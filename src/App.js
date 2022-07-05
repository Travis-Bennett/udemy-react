import React, { useState } from "react";
import './css/E-A-S Styles.css';
import GridSquare from "./components/E-A-S Components/GridSquare";
import GridSizeBtn from "./components/E-A-S Components/GridSizeBtn";

function App() {
    function numOfSquares(num) {
        
        
        return( Array(num).fill(<GridSquare />))
        
    }
    

return(
<div>
    <h1>Etch-A-Sketch!</h1>
    <div className="btnArea">
            <GridSizeBtn/>
    </div>
    <div  className="stage">        
        {numOfSquares(3)}
        
    </div>
</div>
    
    
)

}
export default App;
