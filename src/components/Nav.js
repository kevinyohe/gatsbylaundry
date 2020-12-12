import React from 'react';
import {Link} from 'gatsby';
import logo from "../images/logo.jpg" // Tell webpack this JS file uses this image

export default function Nav(){
    return (
        <>
        <div>
            <ul>
                <li><Link to="/docs">Docs</Link></li>
                <li><Link to="/pictures">Pictures</Link></li>
            </ul>
        </div>
        </>
    )
};