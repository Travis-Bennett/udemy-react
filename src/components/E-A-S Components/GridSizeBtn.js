import React from "react";
import { useState } from "react";

const GridSizeBtn = (props) =>{
    const [gridSize, setGridSize]= useState("3");
    const handleSubmit = (event) =>{
        alert(gridSize);
        return this.gridSize;
    }
        
    return(
        <div>

            <form onSubmit={handleSubmit}>
        
                <input type="number" 
                value={gridSize}
                onChange={(e) => setGridSize(e.target.value)}
                />
                <button type="submit">Create Grid</button>
            </form>
        </div>
    )
}
export default GridSizeBtn;