import "./App.css";

function App() {
  const cvDataArr = [
    {
      company: "Website Designer",
      jobs: [
        {
          position: "Independent Contractor",
          employment: "MAY 2023 - PRES",
          summary:
            "I provide a simplistic yet effective approach to web design, focusing first on the user, with a simple design and ease of use. I also offer infrastructure development to track site traffic, performance, and anything else the customer needs to be successful.",
          PAR: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
          ],
        },
      ],
    },
    {
      company: "Website Designer",
      jobs: [
        {
          position: "Independent Contractor",
          employment: "MAY 2023 - PRES",
          summary:
            "I provide a simplistic yet effective approach to web design, focusing first on the user, with a simple design and ease of use. I also offer infrastructure development to track site traffic, performance, and anything else the customer needs to be successful.",
          PAR: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
          ],
        },
      ],
    },
    {
      company: "Website Designer",
      jobs: [
        {
          position: "Independent Contractor",
          employment: "MAY 2023 - PRES",
          summary:
            "I provide a simplistic yet effective approach to web design, focusing first on the user, with a simple design and ease of use. I also offer infrastructure development to track site traffic, performance, and anything else the customer needs to be successful.",
          PAR: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur",
          ],
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="cv_container">
        <h1>Resume</h1>
        <div className="cv">
          {cvDataArr.map((obj, index) => {
            console.log(obj);
            return (
              <div key={index} className="job">
                <span className="top_span rotate"></span>
                <span className="bottom_span rotate"></span>
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
        <span>
          Do you Like this resume layout? You can see the code{" "}
          <a href="#">here!</a>
        </span>
      </div>
    </div>
  );
}
export default App;
