import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Login  from './auth/Login';
import Register from './auth/Register';
import RegisterSuccess from './auth/RegisterSuccess'
import RegisterFail from './auth/RegisterFail';
import ProfileDetails from './profile/ProfileDetails';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/success' element={<RegisterSuccess/>}/>
        <Route path='/fail' element={<RegisterFail/>}/>
        <Route path='/fail' element={<RegisterFail/>}/>
        <Route path='/myProfile' element={<ProfileDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
