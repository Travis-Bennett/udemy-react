import './css/E-A-S Styles.css';
import GridSquare from "./components/E-A-S Components/GridSquare";

import { useState } from 'react';

function App() {
    const [rowsAndColumns, setRaC] = useState(16);

    const GridSizeBtn = (props) =>{
        const [gridSize, setGridSize]= useState(props);
        const handleSubmit = (event) =>{

            setRaC(gridSize);
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

    function numOfSquares(gridSize) {      
        if(rowsAndColumns<101){
            return( Array(gridSize).fill(<GridSquare />))       
        } 
    }
    
    

return(
<div className="main">
    <h1>Etch-A-Sketch!</h1>
    <div className="btnArea">
    <h1>Please Enter in the number the size of your art (4 will be a 4x4 grid)</h1>
    <h2>Max size: 100</h2>
    {GridSizeBtn(1)}
    </div>
    <div  className="stage" style={{gridTemplateColumns:`repeat(${rowsAndColumns}, auto)`}}>        
        
        {numOfSquares(rowsAndColumns*rowsAndColumns)}
        
    </div>
</div>
    
    
)


}
export default App;
