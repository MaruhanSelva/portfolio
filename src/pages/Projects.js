import Project from "../components/Project";
import { Helmet } from "react-helmet";

const Projects = () => {
    return (
      <>  
        <Helmet>
          <title>Maruhan's Projects</title>
        </Helmet>
      
        <div className="intro">
          <h1>Projects</h1>

          <div className="project_contain">
            <Project 
              name= {"Underground Explorers"}
              link= {"https://github.com/MaruhanSelva/ugexplore"}
              desc= {"A Python game where users face endless rounds of mining for treasure before the mine collapses"}
              />
            
            <Project 
              name= {"PokeTeam"}
              link= {"https://github.com/MaruhanSelva/PokeTeam"}
              desc= {"A React app that helps users find weaknesses in their Pokemon team using the Pokemon API"}
              />

            <Project 
              name= {"Pixel Paint"}
              link= {"https://github.com/MaruhanSelva/pixel-paint"}
              desc= {"Web app that allows users to design pixel art using blocks from Minecraft"}
              />  
          </div>
        </div>
      </>
    );
  };
  
export default Projects;