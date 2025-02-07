import { useState } from "react";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "", date: "", file: null });

  const handleTaskSubmit = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ name: "", description: "", date: "", file: null });
  };

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul>
          <li>Tasks & Projects</li>
          <li>👥 Collaboration</li>
          <li>📅 Calendar</li>
          <li>📄 Online Documents</li>
          <li>📖 Booking</li>
          <li><Link to="/task-status">✅ Task Status</Link></li>
          <li>👤 Employee Details</li>
        </ul>
      </nav>

      <div className="content">
        <div className="topbar">
          <h1 className="text-white">My Tasks</h1>
          <input type="text" className="search-bar" placeholder="Filter and search" />
        </div>

        {/* <div className="tab-buttons"> */}
          {/* <button>Ongoing</button> */}
          {/* <button>Assisting</button> */}
          {/* <button>Set by Me</button> */}
        {/* </div> */}

        <div className="task-card">
          <h2>Create a Task</h2>
          <input 
            type="text" 
            value={newTask.name} 
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} 
            placeholder="Task Name" 
          />
          <textarea 
            value={newTask.description} 
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} 
            placeholder="Task Description" 
          />
          <input 
            type="date" 
            value={newTask.date} 
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })} 
          />
          <input 
            type="file" 
            onChange={(e) => setNewTask({ ...newTask, file: e.target.files[0] })} 
          />
          <button onClick={handleTaskSubmit}>Add Task</button>
        </div>
      </div>
    </div>
  );
}
