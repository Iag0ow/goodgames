import "./About.css";
import Draggable from "react-draggable";
const About = () => {
  return (
    <section className="homeSpace">
      <div className=" d-flex justify-content-center flex-column">
        <div className="align-self-center">
          <h1 className="display-4 fw-bold text-light ">
            About this <span style={{ color: "#0ff" }}>Project</span>
          </h1>
        </div>
        <div className="align-self-center row">
          <div className="col-md-6">
            <Draggable>
              <div className="bg-light me-2 p-4 mt-5 cardAbout grabClick">
                <h1>
                  This is all about a personal project made by me Iago Macêdo,
                  where my main objective was to test my own skills with React
                </h1>
              </div>
            </Draggable>
            <Draggable>
              <div className="bg-light me-2 p-4 mt-5 cardAbout grabClick">
                <h1>
                  This is all about a personal project made by me Iago Macêdo,
                  where my main objective was to test my own skills with React
                </h1>
              </div>
            </Draggable>
          </div>

          <div className="col-md-6 ">
            <Draggable>
              <div className="bg-light me-2 p-4 mt-5 cardAbout grabClick">
                <h1>
                  This is all about a personal project made by me Iago Macêdo,
                  where my main objective was to test my own skills with React
                </h1>
              </div>
            </Draggable>

            <Draggable>
              <div className="bg-light me-2 p-4 mt-5 cardAbout grabClick">
                <h1>
                  This is all about a personal project made by me Iago Macêdo,
                  where my main objective was to test my own skills with React
                </h1>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="align-self-center mt-2">
          <h1 className="display-4 fw-bold text-light ">
            <span style={{ color: "#0ff" }}>Grab </span>Notations
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
