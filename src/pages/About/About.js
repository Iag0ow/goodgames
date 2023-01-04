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
              <div className="bg-light me-2 p-2 mt-5 cardAbout grabClick">
                <h1>
                  This is all about a personal project made by me Iago Macêdo,
                  where my main objective was to test my own skills with React
                </h1>
              </div>
            </Draggable>
            <Draggable>
              <div className="bg-light me-2 p-2 mt-5 cardAbout grabClick">
                <h1>
                  I used resources like UseState, UseEffect, Custom Hooks, React
                  Router,BootStrap, responsive design and more...
                </h1>
              </div>
            </Draggable>
          </div>

          <div className="col-md-6 ">
            <Draggable>
              <div className="bg-light me-2 p-2 mt-5 cardAbout grabClick">
                <h1>The project was based on the consumption of a games api</h1>
              </div>
            </Draggable>

            <Draggable>
              <div className="bg-light me-2 p-2 mt-5 cardAbout grabClick">
                <h1>
                  These are some details about the project, soon I will bring
                  more things and who knows more improvements
                </h1>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="align-self-center mt-2">
          <h1 className="display-4 fw-bold text-light ">
            <span style={{ color: "#0ff" }}>Try dragging</span> The notes
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
