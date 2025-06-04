import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
    return ( <div style = {{
        display: 'flex', 
        marginRight: "auto", 
        alignItems: 'center',
        gap: "15px",

    }}>
        <Link to = {"/"}>
        <img 
        src="logo.png" 
        alt="logo" 
        width = {'60px'} 
        height = {'60px'} 
        className = "image-Inverted"/>
        </Link>{" "}
        <Typography 
        sx={{display:{md:"block", sm:"none", xs: "none" }, 
        mr:"auto", 
        fontWeight:"800", 
        textShadow:"2px 2px 20px #000",
        }}>
            <span style ={{fontSize : "20px"}}>Chat</span>-Nova
        </Typography>
    </div>
    );
};
export default Logo;