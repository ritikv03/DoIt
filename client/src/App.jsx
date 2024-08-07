import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Login/SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Header/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
