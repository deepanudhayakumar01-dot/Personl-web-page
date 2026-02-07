function RosePetals() {
  return (
    <div className="petals-container">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
}

export default RosePetals;
