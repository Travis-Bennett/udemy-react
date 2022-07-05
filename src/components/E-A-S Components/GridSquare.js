import React, { useState } from "react";

function changeBackground(e) {
    e.target.style.background = 'blue';
}

const GridSquare = props =>(

    

    <div onMouseOver={changeBackground} className="square">
        
    </div>
)

export default GridSquare;