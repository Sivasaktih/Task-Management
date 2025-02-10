import { Link } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white h-screen flex flex-col">
      <div className="p-6 bg-blue-700">
        <h1 className="text-2xl font-bold">Zidio Task Manager</h1>
      </div>
      <nav className="flex-grow px-4 py-8">
        <Link to="/collaboration" className="flex items-center mb-6 hover:bg-blue-600 p-2 rounded-md">
          <PeopleIcon className="mr-2" />
          <span>Collaboration</span>
        </Link>
        <Link to="/documents" className="flex items-center mb-6 hover:bg-blue-600 p-2 rounded-md">
          <DescriptionIcon className="mr-2" />
          <span>Online Documents</span>
        </Link>
        <Link to="/calendar" className="flex items-center mb-6 hover:bg-blue-600 p-2 rounded-md">
          <CalendarTodayIcon className="mr-2" />
          <span>Calendar</span>
        </Link>
        <Link to="/booking" className="flex items-center mb-6 hover:bg-blue-600 p-2 rounded-md">
          <AssignmentIcon className="mr-2" />
          <span>Booking</span>
        </Link>
        <Link to="/task-status" className="flex items-center mb-6 hover:bg-blue-600 p-2 rounded-md">
          <AssignmentTurnedInIcon className="mr-2" />
          <span>Task Status</span>
        </Link>
        <Link to="/employee-details" className="flex items-center mb-6 hover:bg-blue-600 p-2 rounded-md">
          <AccountBoxIcon className="mr-2" />
          <span>Employee Details</span>
        </Link>
      </nav>
    </div>
  );
}
