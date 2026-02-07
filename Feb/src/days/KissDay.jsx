import { useEffect, useState } from "react";

function KissDay() {
  const [opened, setOpened] = useState(false);

  // Run only once
  useEffect(() => {
    const stored = localStorage.getItem("kissOpened");
    if (stored === "true") {
      setOpened(true);
    }
  }, []);

  const handleOpen = () => {
    localStorage.setItem("kissOpened", "true");
    setOpened(true);
  };

  return (
    <div className="page-content">
      {/* SEALED KISS CARD */}
      {!opened && (
        <div className="kiss-card">
          <div className="kiss-icon">💋</div>
          <h1>One Last Surprise</h1>
          <p>
            This kiss holds everything  
            I couldn’t say in words.
          </p>

          <button className="btn-kiss" onClick={handleOpen}>
            Reveal My Kiss 💋
          </button>
        </div>
      )}

      {/* FINAL REVEAL */}
      {opened && (
        <div className="kiss-content final-reveal">
          <h1>💋 Kiss Day</h1>
          <h3>Sealed with love</h3>
          <p>
            A kiss may last only a moment,
            but what I feel for you will last forever.
            This kiss carries my love, my care,
            and every heartbeat that whispers your name.
          </p>

          <p className="final-line">
            You are my today, my tomorrow,  
            and my forever ❤️
          </p>
        </div>
      )}
    </div>
  );
}

export default KissDay;
