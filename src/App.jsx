import "./App.css";

function App() {
  const cvDataArr = [
    {
      company: "Savior of Hyrule",
      jobs: [
        {
          position: "Hero of Twilight",
          employment: "2006 – Present",
          summary:
            "A courageous and resourceful adventurer with a proven track record of rescuing kingdoms, solving complex problems, and facing dark forces.",
          PAR: [
            "Led the successful rescue of Princess Zelda, defeating the evil sorcerer Zant and ultimately restoring peace to Hyrule.",
            "Wielded the Master Sword, an ancient weapon with the power to vanquish evil, to defeat Ganondorf and his minions across multiple dimensions and realms.",
            "Went snowboarding with kind Yetis",
            "Midna's sidekick :')",
          ],
        },
        {
          position: "Hero of Winds",
          employment: "2002 – Present",
          summary:
            "An adaptable and brave adventurer with a proven history of saving the Great Sea from the clutches of evil.",
          PAR: [
            "Sailing & Navigation: Expert in the art of seafaring, capable of navigating vast oceans and navigating through treacherous waters with precision.",
            "Set sail across the Great Sea to locate the lost pieces of the Triforce of Courage and restore peace to the islands.",
            "Formed key alliances with the Pirate Crew, the Sages, and the mysterious King of Red Lions, who guided and supported during perilous missions.",
          ],
        },
      ],
    },
    {
      company: "Hyrules most admired man",
      jobs: [
        {
          position: "Suitor",
          employment: "1998 - PRES",
          summary:
            "For some reason, across all the lands, across all the time lines, I have become the most sought after man in Hyrule",
          PAR: [
            "Malon (Ocarina of Time): Expresses clear affection, gifts Link Epona as a token of love.",
            "Saria (Ocarina of Time): Childhood friend with a strong emotional connection, deep care and admiration.",
            "Midna (Twilight Princess): Strong, emotional attachment that evolves from ally to something deeper, ending in bittersweet farewell.",
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
        <div className="cot">
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
