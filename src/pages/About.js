import { Helmet } from "react-helmet";
import nyt from '../assets/nyt.png';
import pie from '../assets/pi.jpg';

const About = () => {
    return (
      <>
        <Helmet>
          <title>
            About Maruhan
          </title>
        </Helmet>


        <div className="intro">
          <div className="content">
            <h1>About Me</h1>
            
            <p className="desc">
              I am currently a 3rd year statistics and computational math student at the University of Waterloo.
              I'm interested in learning how to make cool things using code and how we can use code to make our lives easier.
            </p>

            <p className="desc">
              Outside of school and coding, I'm generally someone who likes to do things that are little more chill. 
              I like to do things like draw/paint, trying new food or even playing the  mini crossword (my best is 0:45)! 
              One of my favourite hobbies is to play video games, specifically story games like Pokemon, The Last of Us and Final Fantasy.
              But I will admit I love a good Overwatch game on a good day.
            </p>

            <div className="centered">
              <img className="img_border" src={nyt} alt="Mini Crossword high score" width="200" />
            </div>

            <p className="desc">
              I also love learning new things. Lately, I find myself learning all about things like DEI (diversity, equity, and inclusion),
              graphic design and even how to cook. One of the things that I baked earlier this year was a Pie for Pi day (March 14th)!
            </p>


            <div className="centered">
              <img className="img_border" src={pie} alt="Uncooked Pie with a Pi design" width="200" />
            </div>

            <p className="caption">Uncooked picture... never said it came out perfect lol</p>


            <p className="desc">
              In the past:
            </p>

            <ul>
              <li>Wrote Python code to help with investment operations at Equitable Life of Canada</li>
              <li>Helped financial analyze data using VBA and Python and look at market trends to help traders at Colonial House Capital</li>
              <li>Did market research and analyzed user traffic data for a new product at Year Zero Studios</li>
            </ul>

          </div>
        </div>
      </>
    );
  };
  
export default About;