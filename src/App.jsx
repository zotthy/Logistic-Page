import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './auth/Login';
import Register from './auth/Register';
import RegisterSuccess from './auth/RegisterSuccess'
import RegisterFail from './auth/RegisterFail';
import ProfileDetails from './profile/ProfileDetails';
import Protect from './RouteProtect/Protect';
import ProfileAddAddress from './profile/ProfileAddAddress';
import Driver from './DriverPage/Driver';
import Cargo from './CargoPage/Cargo';
import DriverNew from './DriverPage/DriverNew';
import CargoList from './CargoPage/CargoList';
import CargoMyList from './CargoPage/CargoMyList';
import CargoDetail from './CargoPage/CargoDetail';
import GetJob from './CargoPage/GetJob';
import CargoMyDetails from './CargoPage/CargoMyDetails';
import CheckProfile from './profile/CheckProfile';
import CargoHistory from './MyCargo/CargoHistory';
import CargoActual from "./MyCargo/CargoActual.jsx";
import Success from "./SuccessPage/Success.jsx";
import DriverActualCargo from "./DriverPage/DriverActualCargo.jsx";
import DriverHistoryCargo from "./DriverPage/DriverHistoryCargo.jsx";
import Layout from "./Layout/Layout.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import StartPage from "./StartPage/StartPage.jsx";


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/success" element={<RegisterSuccess/>}/>
                <Route path="/fail" element={<RegisterFail/>}/>

                <Route element={<Layout/>}>
                    <Route path="/auth/*" element={<Protect/>}>
                        <Route path="home" element={<StartPage/>}/>
                        <Route path="myProfile" element={<ProfileDetails/>}/>
                        <Route path="addAdress" element={<ProfileAddAddress/>}/>
                        <Route path="cargoAdd" element={<Cargo/>}/>
                        <Route path="cargo" element={<CargoList/>}/>
                        <Route path="cargo/:id" element={<CargoDetail/>}/>
                        <Route path="my/cargo" element={<CargoMyList/>}/>
                        <Route path="my/cargo/:id" element={<CargoMyDetails/>}/>
                        <Route path="my/cargo/history" element={<CargoHistory/>}/>
                        <Route path="my/cargo/actual" element={<CargoActual/>}/>
                        <Route path="getJob/:id" element={<GetJob/>}/>
                        <Route path="cargo/success" element={<Success/>}/>
                        <Route path="driverNew" element={<DriverNew/>}/>
                        <Route path="driver" element={<Driver/>}/>
                        <Route path="driver/cargo/actual/:id" element={<DriverActualCargo/>}/>
                        <Route path="driver/cargo/history/:id" element={<DriverHistoryCargo/>}/>
                        <Route path="check/:email" element={<CheckProfile/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App
