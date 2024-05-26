import React, {useState} from 'react';
import InputField from '../components/inputs/InputField';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import InputFieldNumber from '../components/inputs/InputFieldNumber';
import Labellinput from '../components/labels/LabelInput';
import Button from '../components/buttons/Button';

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
                "http://localhost:8080/cargo/add",
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
            navigate("/")
        } catch (error) {
            console.error("failed", error);
        }
        console.log("fdknvjbshvkwnjfdv");
    };

    return (
        <form className="max-w-md mx-auto " onSubmit={CargoAdd}>
            <h1 className="text-left text-indigo-400 text-lg">Cargo</h1>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setPrice}/>
                <Labellinput>price</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setType}/>
                <Labellinput>Description cargo</Labellinput>
            </div>
            <h1 className="text-left text-indigo-400 text-lg">Load address</h1>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setZip_codeload}/>
                <Labellinput>zip code</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setProvinceload}/>
                <Labellinput>province</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setCityload}/>
                <Labellinput>city</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setStreetload}/>
                <Labellinput>street</Labellinput>
            </div>
            <h1 className="text-left text-indigo-400 text-lg">Unload address</h1>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setZip_codeunload}/>
                <Labellinput>zip code</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setProvinceunload}/>
                <Labellinput>province</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setCityunload}/>
                <Labellinput>city</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setStreetunload}/>
                <Labellinput>street</Labellinput>
            </div>
            <Button>Dodaj</Button>
        </form>
    );
}

export default Cargo;