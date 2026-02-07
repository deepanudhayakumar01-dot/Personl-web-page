function DayLayout({ emoji, title, subtitle, message }) {
  return (
    <div className="page-content">
      <h1>{emoji} {title}</h1>
      <h3>{subtitle}</h3>
      <p>{message}</p>
    </div>
  );
}

export default DayLayout;
