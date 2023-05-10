import { Helmet } from "react-helmet";

const Resume = () => {
    return (
      <>
        <Helmet>
          <title>Maruhan's Resume</title>
        </Helmet>
        <div className="intro">
          
          <iframe title="resumepdf" src="https://drive.google.com/file/d/1J7rZQB4JOfhYGKAvVolY5KDmNvypOeIM/preview" width="500" height="700" allow="autoplay"></iframe>

        </div>
      </>
    );
  };
  
export default Resume;