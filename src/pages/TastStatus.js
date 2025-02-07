import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskStatus() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Design UI", status: "todo", priority: "high", deadline: "2025-02-07" },
    { id: 2, name: "Develop API", status: "in-progress", priority: "medium", deadline: "2025-02-10" },
    { id: 3, name: "Deploy App", status: "completed", priority: "low", deadline: "2025-02-05" },
    { id: 4, name: "Test Features", status: "todo", priority: "high", deadline: "2025-02-04" }
  ]);

  // ✅ Auto-move overdue tasks to "Due" section
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date (YYYY-MM-DD)
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.status !== "completed" && task.deadline < today
          ? { ...task, status: "due" }
          : task
      )
    );
  }, []);

  return (
    <div className="task-status-page p-6">
      <Link to="/dashboard" className="text-blue-500 underline">⬅ Back to Dashboard</Link>
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      <div className="grid grid-cols-4 gap-4">
        <TaskColumn title="📝 To-Do" tasks={tasks} status="todo" color="gray-100" />
        <TaskColumn title="🚧 In Progress" tasks={tasks} status="in-progress" color="blue-100" />
        <TaskColumn title="✅ Completed" tasks={tasks} status="completed" color="green-100" />
        <TaskColumn title="⏳ Due (Deadline Over)" tasks={tasks} status="due" color="red-100" />
      </div>
    </div>
  );
}

// ✅ Reusable Task Column Component
function TaskColumn({ title, tasks, status, color }) {
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className={`bg-${color} p-4 rounded shadow`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <div key={task.id} className="p-2 bg-white rounded shadow mb-2">
            <p className="font-medium">{task.name}</p>
            <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
            <p className="text-sm">
              Priority: <PriorityBadge priority={task.priority} />
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks here.</p>
      )}
    </div>
  );
}

// ✅ Priority Badge Component
function PriorityBadge({ priority }) {
  const colors = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-red-500"
  };

  return <span className={`${colors[priority]} font-bold`}>{priority.toUpperCase()}</span>;
}
