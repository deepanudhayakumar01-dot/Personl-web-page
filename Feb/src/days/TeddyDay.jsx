import { useEffect, useState } from "react";

function TeddyDay() {
  const [opened, setOpened] = useState(false);

  // run only once
  useEffect(() => {
    const stored = localStorage.getItem("teddyOpened");
    if (stored === "true") {
      setOpened(true);
    }
  }, []);

  const handleOpen = () => {
    localStorage.setItem("teddyOpened", "true");
    setOpened(true);
  };

  return (
    <div className="page-content">
      {/* GIFT BOX */}
      {!opened && (
        <div className="gift-box">
          <div className="gift-icon">🎁</div>
          <h1>A Little Surprise for You 🧸</h1>
          <p>This gift is filled with warmth and hugs.</p>

          <button className="btn-open-gift" onClick={handleOpen}>
            Open Gift 🎁
          </button>
        </div>
      )}

      {/* TEDDY DAY CONTENT */}
      {opened && (
        <div className="teddy-content">
          <h1>🧸 Teddy Day</h1>
          <h3>Someone to hug when I can’t</h3>
          <p>
            This teddy is a small piece of me.
            Whenever you feel lonely or miss me,
            hug it tight and remember that my arms
            are always wrapped around you.
          </p>
        </div>
      )}
    </div>
  );
}

export default TeddyDay;
