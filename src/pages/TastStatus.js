import { Link } from "react-router-dom";
import { useState } from "react";

export default function TaskStatus() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Design UI", status: "todo" },
    { id: 2, name: "Develop API", status: "in-progress" },
    { id: 3, name: "Deploy App", status: "completed" }
  ]);

  const todoTasks = tasks.filter(task => task.status === "todo");
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");
  const completedTasks = tasks.filter(task => task.status === "completed");

  return (
    <div className="task-status-page p-6">
      <Link to="/dashboard" className="text-blue-500 underline">⬅ Back to Dashboard</Link>
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">📝 To-Do</h3>
          {todoTasks.map(task => <p key={task.id} className="p-2 bg-white rounded shadow mb-2">{task.name}</p>)}
        </div>

        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-semibold mb-2">🚧 In Progress</h3>
          {inProgressTasks.map(task => <p key={task.id} className="p-2 bg-white rounded shadow mb-2">{task.name}</p>)}
        </div>

        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-semibold mb-2">✅ Completed</h3>
          {completedTasks.map(task => <p key={task.id} className="p-2 bg-white rounded shadow mb-2">{task.name}</p>)}
        </div>
      </div>
    </div>
  );
}
