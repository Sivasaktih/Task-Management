import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListAltIcon from '@mui/icons-material/ListAlt'; // To-Do
import BuildIcon from '@mui/icons-material/Build'; // In Progress
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Completed
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'; // Due (Overdue)
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sidebar from "./Sidebar";


export default function TaskStatus() {
  const [tasks, setTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/tasks") // Replace with actual API URL
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  // ✅ Auto-move overdue tasks to "Due" section without modifying tasks directly
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const dueTasks = tasks.filter(task => task.status !== "completed" && task.deadline < today);
    setOverdueTasks(dueTasks);
  }, [tasks]);

  return (
    <>
    {/* <div>
    <Sidebar />
    </div> */}
    <div className="task-status-page p-6 bg-blue-100 h-screen">
     <div className="flex items-center bg-blue-500 mb-6">
        <Link to="/dashboard" className="text-blue-500 underline ml-4">
          <ArrowBackIcon style={{ color: 'White' }}/>
        </Link>
        <h2 className="text-3xl font-bold text-white ml-4">Task Status</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
  <TaskColumn 
    title={<><ListAltIcon className="text-blue-500" /> To-Do</>} 
    tasks={tasks} 
    status="todo" 
    color="gray-100 text-blue-500" 
  />
  
  <TaskColumn 
    title={<><BuildIcon className="text-orange-500" />  In Progress</>} 
    tasks={tasks} 
    status="in-progress" 
    color="blue-100 text-orange-500" 
  />
  
  <TaskColumn 
    title={<><CheckCircleIcon className="text-green-500" /> Completed</>} 
    tasks={tasks} 
    status="completed" 
    color="green-100 text-green-500" 
  />
  
  <TaskColumn 
    title={<><HourglassBottomIcon fontSize="small" className="text-red-500 " />  Due (Deadline Over)</>} 
    tasks={overdueTasks} 
    status="due" 
    color="red-100 text-red-500" 
  />
</div>

    </div>
    </>
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
          <div key={task.id} className="p-4 bg-white rounded shadow mb-4">
            {task.media && <img src={task.media} alt="Task Media" className="w-full h-40 object-cover rounded mb-2" />}
            <h4 className="font-bold text-lg">{task.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
            <p className="text-sm text-gray-600">Start Date: {task.startDate}</p>
            <p className="text-sm text-gray-600">Due Date: {task.deadline}</p>
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
