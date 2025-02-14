import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventIcon from "@mui/icons-material/Event";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PersonIcon from "@mui/icons-material/Person";
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
      <li>
        <Link to="" className="w-full h-full flex items-center gap-2">
          <PeopleIcon /> Collaboration
        </Link>
      </li>
      <li>
        <Link to="" className="w-full h-full flex items-center gap-2">
          <DescriptionIcon /> Online Documents
        </Link>
      </li>
      <li>
        <Link to="" className="w-full h-full flex items-center gap-2">
          <CalendarTodayIcon /> Calendar
        </Link>
      </li>
      <li>
        <Link to="" className="w-full h-full flex items-center gap-2">
          <EventIcon /> Booking
        </Link>
      </li>
      <li>
        <Link to="/task-status" className="w-full h-full flex items-center gap-2">
          <TaskAltIcon /> Task Status
        </Link>
      </li>
      <li>
        <Link to="" className="w-full h-full flex items-center gap-2">
          <PersonIcon /> Employee Details
        </Link>
      </li>
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
