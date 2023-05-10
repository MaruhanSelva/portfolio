import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/resume">Resume</CustomLink>
            </ul>
        </nav>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? "active links": "links"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;