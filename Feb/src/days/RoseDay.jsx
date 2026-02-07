import { useEffect, useState } from "react";
import RosePetals from "./RosePetals";

function RoseDay() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  // 🔐 Check once on page load
  useEffect(() => {
    const stored = localStorage.getItem("roseAccepted");
    if (stored === "true") {
      setAccepted(true);
    }
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 100 - 50;
    setNoPos({ x, y });
  };

  const handleYes = () => {
    localStorage.setItem("roseAccepted", "true"); // 🔒 save forever
    setAccepted(true);
  };

  return (
    <div className="page-content">
      {/* RUNS ONLY ONCE */}
      {!accepted && (
        <div className="question-box">
          <h1>Will you accept this rose? 🌹</h1>

          <div className="question-actions">
            <button className="btn-yes" onClick={handleYes}>
              Yes 💖
            </button>

            <div
              className="no-wrapper"
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`
              }}
              onMouseEnter={moveNoButton}
              onMouseMove={moveNoButton}
            >
              <button className="btn-no">No 🙈</button>
            </div>
          </div>
        </div>
      )}

      {/* ALWAYS SHOW AFTER ACCEPTED */}
      {accepted && (
        <div className="rose-content">
          <h1>🌹 Rose Day</h1>
          <h3>A flower for my forever</h3>
          <p>
            This rose carries my feelings to you.
            Just like this flower, my love for you grows more beautiful every day.
          </p>
        </div>
      )}

      <RosePetals/>
    </div>
  );
}

export default RoseDay;
