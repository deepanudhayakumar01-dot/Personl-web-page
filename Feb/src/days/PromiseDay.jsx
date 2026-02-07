import { useEffect, useState } from "react";

function PromiseDay() {
  const [opened, setOpened] = useState(false);

  // Run only once
  useEffect(() => {
    const stored = localStorage.getItem("promiseOpened");
    if (stored === "true") {
      setOpened(true);
    }
  }, []);

  const handleOpen = () => {
    localStorage.setItem("promiseOpened", "true");
    setOpened(true);
  };

  return (
    <div className="page-content">
      {/* SEALED PROMISE CARD */}
      {!opened && (
        <div className="promise-card">
          <div className="promise-seal">🤝</div>
          <h1>A Promise Made With Love</h1>
          <p>This promise is sealed straight from my heart.</p>

          <button className="btn-unseal" onClick={handleOpen}>
            Unseal Promise 🤝
          </button>
        </div>
      )}

      {/* PROMISE DAY CONTENT */}
      {opened && (
        <div className="promise-content">
          <h1>🤝 Promise Day</h1>
          <h3>Words I’ll always keep</h3>
          <p>
            I promise to stand by you in every situation,
            to respect your dreams, and to support you
            not just on the happy days, but on the hard ones too.
            My promise is not just for today — it’s forever.
          </p>
        </div>
      )}
    </div>
  );
}

export default PromiseDay;
