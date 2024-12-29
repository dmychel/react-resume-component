function logic() {
  return (
    <div className="app">
      <div className="cv_container">
        <div className="cv">
          {array.map((obj, index) => {
            return (
              <div key={index} className="job">
                {/* spinning rectangles */}
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
      </div>
    </div>
  );
}
