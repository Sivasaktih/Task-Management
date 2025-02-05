import { useState, useEffect } from "react";

const TaskStatusPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // "todo", "in-progress", "completed"

  useEffect(() => {
    // Fetch tasks from API
    fetch("/src/pages/Dashboard.js")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredTasks = filter === "all" ? tasks : tasks.filter(task => task.status === filter);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task Status</h2>
      
      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-4">
        {["all", "todo", "in-progress", "completed"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded ${
              filter === status ? "bg-blue-500 text-white" : "bg-gray-200 text-black-100"
            }`}
            onClick={() => setFilter(status)}
          >
            {status.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border rounded bg-white shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>
            <span className="px-2 py-1 text-sm rounded bg-gray-100">{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskStatusPage;
