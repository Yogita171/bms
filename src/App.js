import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from './pages/userdashboard';
import Privateroute from './components/Privateroute';
import Profile_info from './pages/Profile_info';
import Feedback from './pages/Feedback';
import { AppProvider } from '../src/context/';
import Budget from '../src/dashboard/Budget';
import ExpenseTotal from '../src/dashboard/ExpenseTotal';
import ExpenseList from '../src/dashboard/ExpenseList';
import AddExpenseForm from '../src/dashboard/AddExpenseForm';
import RemainingBudget from '../src/dashboard/Remaining';


function App() {
  return ( 
   <BrowserRouter>
   <ToastContainer position="bottom-center"/>
   <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/signup" element={<Signup/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="/Feedback" element={<Feedback/>}/>


      <Route path="/user" element={<Privateroute/>}>
          <Route path="dashboard" element={<Userdashboard/>}/>
          <Route path="profile-info" element={<Profile_info/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
