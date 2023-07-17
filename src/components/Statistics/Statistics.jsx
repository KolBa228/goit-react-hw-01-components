export const StatisticTable = ({ children }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {children}
      </ul>
    </section>
  );
};