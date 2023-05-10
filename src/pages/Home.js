import {Helmet} from "react-helmet"
import pikachu from "../assets/pikachu.png"
import darkmage from "../assets/darkmage.png"
import diamondpick from "../assets/diamondpick.png"

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Maruhan's Home</title>
        </Helmet>
        <div className="intro">
          <div className="content">
            <h1 className="typewriter">Hi,I'm Maruhan</h1>
            <p className="desc">Welcome to my website, I am excited to show what I've made!</p>

            <p className="desc">
              I'm a student at the University of Waterloo where I'm studying statistics and computational math.
              In my free time, I like to draw, write and play video games.
            </p>

            <div className="centered">
              <img src={diamondpick} alt="Diamond Pickaxe from Minecraft" height={70} />
              <img src={darkmage} alt="Dark Mage from Final Fantasy" height={70} />
              <img src={pikachu} alt="Pikachu from Pokemon" height={70} />
              
            </div>

            
            </div>
        </div>
      </>
    );
  };
  
export default Home;