import React from "react";
import gif from "../../imgs/buffer-404.gif";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <section className="container-fluid homeSpace">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="display-1 text-light">Error 404</h1>
          <br />
          <div className="block">
            <img src={gif} className="d-block w-100" alt="" />
          </div>
          <h1 className="display-4 text-light">
            Oooops... You're not supposed to be here
          </h1>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
