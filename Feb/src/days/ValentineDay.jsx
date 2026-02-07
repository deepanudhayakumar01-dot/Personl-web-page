import { useEffect, useState } from "react";

function ValentineDay() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const today = new Date();
    const isFeb14 = today.getMonth() === 1 && today.getDate() === 14;

    if (isFeb14) {
      const seen = localStorage.getItem("valentinePopupSeen");
      if (!seen) {
        setShowPopup(true);
      }
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("valentinePopupSeen", "true");
    setShowPopup(false);
  };

  return (
    <div className="page-content">
      {/* 🌹 SMALL MESSAGE POPUP */}
      {showPopup && (
        <div className="valentine-popup">
          <div className="valentine-popup-card">
            <h2>💌 One last message</h2>
            <p>
              Every day before today was just a step
              leading me to you.
            </p>
            <button onClick={closePopup} className="btn-valentine">
              Continue ❤️
            </button>
          </div>
        </div>
      )}

      {/* ❤️ FINAL VALENTINE CONTENT */}
      {!showPopup && (
        <div className="valentine-content final-reveal">
          <h1>❤️ Happy Valentine’s Day ❤️</h1>
          <h3>My forever begins with you</h3>

          <p>
            From the very first smile to this very moment,
            every day with you has felt special.
            Roses, promises, hugs, kisses —
            they all led to this one truth.
          </p>

          <p className="final-line">
            I choose you.  
            Today, tomorrow, and always. 💖
          </p>
        </div>
      )}
    </div>
  );
}

export default ValentineDay;
