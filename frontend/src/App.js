
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Orgs from './Pages/Orgs/Orgs';
import Groups from './Pages/Groups/Groups';
// import Departments from './Pages/Departments/Departments';
import User from './Pages/User/User';
import Roles from './Pages/Roles/Roles';
import Permissions from './Pages/Permissions/Permissions';
import Doors from './Pages/Doors/Doors';
import Devices from './Pages/Devices/Devices';
// import DeviceType from './Pages/DevicesType/DevicesType';
import DeviceGroup from './Pages/DevicesGroups/DevicesGroups';
import Students from './Pages/Students/Students';
import Commands from './Pages/Commands/Commands';
import Settings from './Pages/Settings/Settings';
import Report from './Pages/Reports/Reports';
import ReportPunchWise from './Pages/Reports/ReportPunchWise';
import Logout from './Components/Logout/Logout';
import Login from './Components/Login/Login';



function App() {
  return (
    <div className="App">
    <BrowserRouter >
    {/* // if routes == /login then show login page
    // else show header and sidebar */}
    {window.location.pathname === '/login' ? null : <Header />}
    {window.location.pathname === '/login' ? null : <Sidebar />}
      {/* <Header />
      <Sidebar /> */}
      <Routes basename="/">
      <Route path="/" element={<Home />} />
      <Route path="/orgs" element={<Orgs />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/user" element={<User />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/permissions" element={<Permissions />} />
      <Route path="/doors" element={<Doors />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/deviceGroup" element={<DeviceGroup />} />
      <Route path="/Students" element={<Students />} />
      <Route path="/commands" element={<Commands />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/reports" element={<Report />} />  
     <Route path="/reportPunchWise" element={<ReportPunchWise />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
