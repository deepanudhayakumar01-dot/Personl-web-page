import { useEffect, useState } from "react";

function ProposeDay() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const stored = localStorage.getItem("proposeAccepted");
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
    localStorage.setItem("proposeAccepted", "true");
    setAccepted(true);
  };

  return (
    <div className="page-content">
      {!accepted && (
        <div className="question-box">
          <h1>Will you be mine forever? 💍</h1>

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

      {accepted && (
        <div className="rose-content">
          <h1>💍 Propose Day</h1>
          <h3>From my heart to yours</h3>
          <p>
            I don’t need perfect words.
            I just need you — today and always.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProposeDay;
