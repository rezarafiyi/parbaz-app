import [React from] "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TestForm from "./pages/TestForm";
import TestResult from "./pages/TestResult";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/test' element={<TestForm />} />
        <Route path='/result' element={<TestResult />} />
      </Routes>
    </Router>
  );
}
