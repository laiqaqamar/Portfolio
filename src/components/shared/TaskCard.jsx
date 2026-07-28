export default function TaskCard({ title, assignee, status, dueDate}) {
  const statusClass = `status-${status.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="task-card">

      <div className="task-card-head">
        <h3>{title}</h3>
        <span className={`status-pill ${statusClass}`}>{status}</span>
      </div>

      <p className="card-meta">{assignee}</p>

      <p className="task-due">Due: {dueDate}</p>

    </div>
  );
}
