import React from "react";

function Project({ name, link, desc }) {
    return (
        <div className="project">
            <div className="proj_name">
                <a rel="noreferrer" target="_blank" href={link}> { name } </a>
            </div>
            { /* Insert a short picture of the project if you have time*/}

            <div className="proj_info">
                { desc }
            </div>


        </div>
    )
}

export default Project;
