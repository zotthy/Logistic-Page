import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content';
import Login  from './auth/Login';
import Register from './auth/Register';
import RegisterSuccess from './auth/RegisterSuccess'
import RegisterFail from './auth/RegisterFail';
import ProfileDetails from './profile/ProfileDetails';
import Protect from './RouteProtect/Protect';
import HomePage from './HomePage/HomePage';
import ProfileAddAddress from './profile/ProfileAddAddress';
import Driver from './DriverPage/Driver';
import Cargo from './CargoPage/Cargo';
import DriverNew from './DriverPage/DriverNew';
import DriverDetail from './DriverPage/DriverDetail';
import CargoList from './CargoPage/CargoList';
import CargoMyList from './CargoPage/CargoMyList';
import CargoDetail from './CargoPage/CargoDetail';
import GetJob from './CargoPage/GetJob';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<RegisterSuccess/>}/>
        <Route path="/fail" element={<RegisterFail/>}/>


        <Route path="/cargoAdd" element={<Cargo />}/>
        <Route path="/cargo" element={<CargoList/>}/>

        <Route path="/cargo/:id" element={<CargoDetail/>}/>
        
        <Route path="/my/cargo" element={<CargoMyList/>}/>



        <Route path="/driverNew" element={<DriverNew/>}/>
        <Route path="/driver" element={<Driver />}/>
        <Route path="/driver/:id" element={<DriverDetail/>} />
        
        <Route path="/getJob/:id" element={<GetJob/>}/>



        <Route path="/auth" element={<Protect />}>
            <Route path="myProfile" element={<ProfileDetails />}/>
            <Route path="addAdress" element={<ProfileAddAddress/>}/>
        </Route>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
