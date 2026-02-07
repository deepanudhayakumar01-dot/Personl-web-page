import { NavLink } from "react-router-dom";
import { days } from "./daysConfig";

function Navbar() {
  const today = new Date().getDate();

  // Progress for Feb 7–13
  const progress = Math.min(Math.max(today - 6, 0), 7) * 14.3;

  return (
    <nav className="prime-navbar">
      {/* 🌹 Top progress bar */}
      <div
        className="top-progress"
        style={{ width: `${progress}%` }}
      />

      <div className="nav-inner">
        {days.map((d, i) => {
          const isPast = today > d.date;
          const isToday = today === d.date;

          return (
            <div key={d.path} className="nav-item">
              <NavLink
                to={d.path}
                className={`nav-link 
                  ${isPast ? "done" : ""} 
                  ${isToday ? "today" : ""}`}
              >
                {d.label}
              </NavLink>

              {i < days.length - 1 && (
                <span
                  className={`progress-line ${
                    today > d.date ? "progress-done" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
