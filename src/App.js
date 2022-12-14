import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Appointment from './components/Appointment/Appointment';
import SignUp from './components/Login/SignUp';
import RequireAuth from './components/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointments from './components/Dashboard/MyAppointments';
import MyReview from './components/Dashboard/MyReview';
import MyHistory from './components/Dashboard/MyHistory';
import Users from './components/Dashboard/Users';
import RequireAdmin from './components/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/appointments' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="/dashboard/review" element={<MyReview></MyReview>}></Route>
          <Route path="/dashboard/history" element={<MyHistory></MyHistory>}></Route>
          <Route path="/dashboard/users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
