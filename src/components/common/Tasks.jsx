import TaskCard from "../shared/TaskCard";

const tasks = [
  { title: "Set up Vite project", assignee: "Laiqa Qamar", status: "Completed", dueDate: "Jul 21" },
  { title: "Build UserProfile component", assignee: "Laiqa Qamar", status: "In Progress", dueDate: "Jul 24" },
  { title: "Build TaskCard component", assignee: "Laiqa Qamar", status: "In Progress", dueDate: "Jul 24" },
];

export default function Tasks() {
  return (
    <section id="tasks" className="section tasks">
      <h2 className="section-title">Tasks</h2>

      <p className="section-subtitle">
        Reusable task cards rendered dynamically from props.
      </p>

      <div className="card-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.title}
            title={task.title}
           
            assignee={task.assignee}
            status={task.status}
            dueDate={task.dueDate}
          />
        ))}
      </div>
    </section>
  );
}
