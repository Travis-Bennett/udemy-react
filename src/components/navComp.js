import React from "react";
import './portStyles.css'

const NavComponent = props => (
    <div className="portNav">
        {props.name}
        <ul>
            <li>Home</li>
            <li>Bio</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
            
        </ul>
        
    </div>
);

export default NavComponent;