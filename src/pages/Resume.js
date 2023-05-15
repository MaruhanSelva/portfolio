import { Helmet } from "react-helmet";

const Resume = () => {
    return (
      <>
        <Helmet>
          <title>Maruhan's Resume</title>
        </Helmet>
        <div className="intro">
          
        <iframe title="resumepdf" src="https://drive.google.com/file/d/15YzR7rP6VRF_m3v6mr3w5u1kODbibpKM/preview" width="600" height="700" allow="autoplay"></iframe>

        </div>
      </>
    );
  };
  
export default Resume;