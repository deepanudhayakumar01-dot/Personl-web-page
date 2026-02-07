import { useEffect, useState } from "react";

function HugDay() {
  const [opened, setOpened] = useState(false);

  // Run only once
  useEffect(() => {
    const stored = localStorage.getItem("hugOpened");
    if (stored === "true") {
      setOpened(true);
    }
  }, []);

  const handleOpen = () => {
    localStorage.setItem("hugOpened", "true");
    setOpened(true);
  };

  return (
    <div className="page-content">
      {/* WARM HUG NOTE */}
      {!opened && (
        <div className="hug-note">
          <div className="hug-icon">🤗</div>
          <h1>A Warm Hug For You</h1>
          <p>
            Close your eyes for a moment.  
            This hug is coming straight from my heart.
          </p>

          <button className="btn-hug" onClick={handleOpen}>
            Receive Hug 🤗
          </button>
        </div>
      )}

      {/* HUG DAY CONTENT */}
      {opened && (
        <div className="hug-content embrace">
          <h1>🤗 Hug Day</h1>
          <h3>Wrapped in warmth</h3>
          <p>
            A hug doesn’t need words.
            It says “I’m here”, “You’re safe”,
            and “You’re loved” all at once.
            Until I can hold you in my arms,
            let this hug remind you how deeply you mean to me.
          </p>
        </div>
      )}
    </div>
  );
}

export default HugDay;
