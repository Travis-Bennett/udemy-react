import React, { useState } from "react";

function App() {

    function Game() {

        //Can't figure out why for loop wont stop so using if instead
        // for(let i =0; i<2; i++){
        //     i++;
        // return PlayerChoice();
        // }
        // return EndGame();
        // if(games>=5){
        //     return EndGame();
        // }
        return PlayerChoice();
    }

    function PlayerChoice(){
        

        const [pScore, setPScore]=useState(0);
        const [oScore, setOScore]=useState(0);
        const [choice, setChoice] = useState("");
        

        const handleSubmit = (ev) => {
            const choice2=choice.toLocaleLowerCase();
            ev.preventDefault();
            
            const IncreasePScore= () =>{
                setPScore(pScore+1);
            }

            const IncreaseOScore= () =>{
                setOScore(oScore+1);
            }

            

        const computerPlay=() => {
            let oppChoice=Math.floor((Math.random()*3)+1);
            if(oppChoice===1){
                return "rock";
            }
            else if(oppChoice===2){
                return "paper"
            }
            else {
                return"scissors"
            }
        }

            switch (computerPlay()) {
                case "rock":
                    if(choice2==="paper"){
                        alert("opponent chose rock; you WIN! :)");
                        IncreasePScore();
                    }
                    else if(choice2==="scissors"){
                        alert("opponent chose rock; you LOSE! :(");
                        IncreaseOScore();
                    }
                    else {
                        alert("opponent chose rock; DRAW!");
                    }
                    break;
                    
                case "paper":
                    if(choice2==="scissors"){
                        alert("opponent chose paper; you WIN! :)");
                        IncreasePScore();
                    }
                    else if(choice2==="rock"){
                        alert("opponent chose paper; you LOSE! :(");
                        IncreaseOScore();
                    }
                    else {
                        alert("opponent chose paper; DRAW!");
                    }
                    break;
                    
                    case "scissors":
                        if(choice2==="rock"){
                            alert("opponent chose scissors; you WIN! :)");
                            IncreasePScore();
                        }
                        else if(choice2==="paper"){
                            alert("opponent chose scissors; you LOSE! :(");
                            IncreaseOScore();
                        }
                        else {
                            alert("opponent chose scissors; DRAW!");
                        }
                        break;
                default:
                    break;
            }
            
            
        }
        
        if(pScore==3){
            return (
                <div>
                    <h1>Player Wins!</h1>
                </div>
            )
        }
        else if(oScore==3){
            return (
                <div>
                    <h1>Opponent Wins!</h1>
                </div>
            )
        }
        else return(
            
            <div>
            <form onSubmit={handleSubmit}>
                <h1>Rock, Paper, Scissors</h1>
                <h2>Best of 5</h2>
                <label> Enter your choice
                <input 
                    type="text" 
                    value={choice} 
                    onChange={(e) => setChoice(e.target.value)}
                />
                </label>
                
                <input type="submit" value="submit" />
            </form>
            
            <br></br>
            <h3>Player Score: {pScore}</h3>
            <h3>Opponent Score: {oScore}</h3>
            </div>
        
        )
        
        
    }

    function EndGame() {
        return(
        <div>
            <h1>The game has ended. Thanks for playing!</h1>
        </div>
        )
    }

    return(
        
        Game()
        
    )
    
    }


export default App;
