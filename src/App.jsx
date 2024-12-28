import { useState } from "react";
import { sonicArr, linkArr } from "./data";
import "./App.css";

function App() {
  const [arr, setArr] = useState(linkArr);
  const array = arr;

  function handleClick() {
    setArr((prevArray) => (prevArray === linkArr ? sonicArr : linkArr));
  }

  return (
    <div className="app">
      <div className="cv_container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: ".5em 0" }}>Resume</h1>{" "}
          <button style={{ padding: "0.25rem 1rem" }} onClick={handleClick}>
            Change Theme
          </button>
        </div>

        <div className="cv">
          {array.map((obj, index) => {
            return (
              <div key={index} className="job">
                <span className="top_span rotate">
                  <img src="/public/icons/triforce.png" alt="" />
                </span>
                <span className="bottom_span rotate">
                  <img src="/public/icons/triforce.png" alt="" />
                </span>
                <h3>{obj.company}</h3>
                {obj.jobs.map((job, index) => {
                  return (
                    <div key={index} className="position">
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h3>{job.position}</h3>
                        <h5>{job.employment}</h5>
                      </div>
                      <p>{job.summary}</p>
                      <ul>
                        {job.PAR.map((bullet, index) => {
                          return <li key={index}>{bullet}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div
          style={{
            padding: "1rem 0",
            fontSize: "1.5rem",
          }}
        >
          <p>
            Do you Like this resume layout? You can see the code{" "}
            <a href="#">here!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
