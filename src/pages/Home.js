import {Helmet} from "react-helmet"

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
       
            </div>
        </div>
      </>
    );
  };
  
export default Home;