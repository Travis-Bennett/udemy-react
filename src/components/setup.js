import React from "react";

const Setup = props => (
    <div>
        <h1>Campaign Setup</h1>
        <select name="investigator" id="investigator">
            <option value="choice">~Investigator~</option>
            <option value="roland">Roland Banks</option>
            <option value="diasy">Daisy Walker</option>
            <option value="skids">Skids O'Toole</option>
            <option value="agnes">Agnes Baker</option>
            <option value="wendy">Wendy Adams</option>
        </select>

        <select name="difficulty" id="difficulty">
            <option value="choice">~Difficulty~</option>
            <option value="easy">Easy</option>
            <option value="standard">Standard</option>
            <option value="hard">Hard</option>
            <option value="expert">Expert</option>
        </select>
    </div>
)
export default Setup;