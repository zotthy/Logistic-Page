import React, {useState} from 'react';
import InputField from '../components/inputs/InputField';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Labellinput from '../components/labels/LabelInput';
import Button from '../components/buttons/Button';
import InputFieldPrice from "../components/inputs/InputFieldPrice.jsx";
import InputFieldZipCode from "../components/inputs/InputFieldZipCode.jsx";

function Cargo() {
    const navigate = useNavigate();
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');

    //load address
    const [streetload, setStreetload] = useState('');
    const [cityload, setCityload] = useState('');
    const [provinceload, setProvinceload] = useState('');
    const [zip_codeload, setZip_codeload] = useState('');
    //unload address
    const [streetunload, setStreetunload] = useState('');
    const [cityunload, setCityunload] = useState('');
    const [provinceunload, setProvinceunload] = useState('');
    const [zip_codeunload, setZip_codeunload] = useState('');

    const CargoAdd = async (e) => {
        e.preventDefault();
        try {
            const token = JSON.parse(localStorage.getItem("Token"));
            const response = await axios.post(
                import.meta.env.VITE_API_URL+"/cargo/add",
                {
                    price: price,
                    typeCargo: type,
                    loadAddress: {
                        street: streetload,
                        city: cityload,
                        province: provinceload,
                        zip_code: zip_codeload
                    },
                    unloadAddress: {
                        street: streetunload,
                        city: cityunload,
                        province: provinceunload,
                        zip_code: zip_codeunload
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            console.log("add Data");
            navigate("/auth/my/cargo/actual")
        } catch (error) {
            console.error("failed", error);
        }
        console.log("fdknvjbshvkwnjfdv");
    };

    return (
        <form className="max-w-md mx-auto " onSubmit={CargoAdd}>
            <h1 className="text-left text-indigo-400 text-lg">Ładunek</h1>
            <div className="relative z-0 w-full mb-5 group">
                <InputFieldPrice setData={setPrice}/>
                <Labellinput>Cena</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setType}/>
                <Labellinput>Opisz ładunek</Labellinput>
            </div>
            <h1 className="text-left text-indigo-400 text-lg">Aderes załadunku</h1>
            <div className="relative z-0 w-full mb-5 group">
                <InputFieldZipCode setData={setZip_codeload}/>
                <Labellinput>Kod pocztowy (00-000)</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setProvinceload}/>
                <Labellinput>Województwo</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setCityload}/>
                <Labellinput>Miasto</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setStreetload}/>
                <Labellinput>Ulica, nr domu</Labellinput>
            </div>
            <h1 className="text-left text-indigo-400 text-lg">Adres rozładunku</h1>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setZip_codeunload}/>
                <Labellinput>Kod pocztowy</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setProvinceunload}/>
                <Labellinput>Województwo</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setCityunload}/>
                <Labellinput>Miasto</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setStreetunload}/>
                <Labellinput>Ulica, nr domu</Labellinput>
            </div>
            <Button>Dodaj ładunek</Button>
        </form>
    );
}

export default Cargo;