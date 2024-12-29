import { useState } from "react";
import { sonicArr, linkArr } from "./data";
import "./App.css";

function App() {
  // FOR DEMO FUNCTIONALITY ONLY
  const [arr, setArr] = useState(sonicArr);
  const array = arr;

  // FOR DEMO FUNCTIONALITY ONLY
  function handleClick() {
    setArr((prevArray) => (prevArray === linkArr ? sonicArr : linkArr));
  }

  return (
    // ANY INLINE STYLING AND CONDITIONAL STATEMENTS OR ARE FOR DEMO FUNCTIONALITY ONLY YOU CAN SEE THE BAREBONES LOGIC IN THE LOGIC.JSX FILE

    <div className="app">
      <div className="cv_container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <h1 style={{ margin: ".5em 0" }}>Resume</h1>
          <button style={{ padding: "0.25rem 1rem" }} onClick={handleClick}>
            Change Theme
          </button>
        </div>

        <div
          style={{
            padding: "2rem 0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {arr === linkArr ? (
            <>
              <img
                src="/images/link.webp"
                alt="Link"
                style={{ height: "150px", width: "auto" }}
              />
              <p style={{ maxWidth: "50%" }}>
                Hyeeh kyaah hyaah haa hyet haa haa jum jum haaa
              </p>
            </>
          ) : (
            <>
              <img
                src="/images/sonic.webp"
                alt="Sonic"
                style={{ height: "150px", width: "auto" }}
              />
              <p style={{ maxWidth: "50%" }}>
                Sonic&apos;s the name, Speed&apos;s my game!
              </p>
            </>
          )}
        </div>
        <div className={arr === linkArr ? "cv cv_link" : "cv cv_sonic"}>
          {array.map((obj, index) => {
            return (
              <div
                key={index}
                className={arr === linkArr ? "job job_link" : "job job_sonic"}
              >
                <span className="top_span rotate">
                  {arr === linkArr ? (
                    <img src="/icons/triforce.png" alt="" />
                  ) : (
                    <img
                      src="/icons/ring.gif"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  )}
                </span>
                <span className="bottom_span rotate">
                  {arr === linkArr ? (
                    <img src="/icons/triforce.png" alt="" />
                  ) : (
                    <img
                      src="/icons/ring.gif"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  )}
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
            padding: "1rem 1rem",
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
