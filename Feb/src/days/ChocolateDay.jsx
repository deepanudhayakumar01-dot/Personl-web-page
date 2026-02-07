import { useEffect, useState } from "react";

function ChocolateDay() {
  const [opened, setOpened] = useState(false);

  // Run only once (persist)
  useEffect(() => {
    const stored = localStorage.getItem("chocolateOpened");
    if (stored === "true") {
      setOpened(true);
    }
  }, []);

  const handleOpen = () => {
    localStorage.setItem("chocolateOpened", "true");
    setOpened(true);
  };

  return (
    <div className="page-content">
      {/* CLOSED LETTER BOX */}
      {!opened && (
        <div className="letter-box">
          <div className="letter-icon">💌</div>
          <h1>A Sweet Message Awaits 🍫</h1>
          <p>Someone saved a little sweetness just for you.</p>

          <button className="btn-open" onClick={handleOpen}>
            Open 🍫
          </button>
        </div>
      )}

      {/* CONTENT AFTER OPEN */}
      {opened && (
        <div className="chocolate-content">
          <h1>🍫 Chocolate Day</h1>
          <h3>Sweet like you</h3>
          <p>
            Just like chocolate, you make everything better.
            You melt my worries, sweeten my days,
            and turn ordinary moments into something special.
            Today is a reminder of how sweet life feels with you in it.
          </p>
        </div>
      )}
    </div>
  );
}

export default ChocolateDay;
