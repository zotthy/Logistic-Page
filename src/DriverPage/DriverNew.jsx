// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import InputField from '../components/inputs/InputField';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import InputFieldNumber from '../components/inputs/InputFieldNumber';
import Labellinput from '../components/labels/LabelInput';
import Button from '../components/buttons/Button';

const DriverNew = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');

    const DriverAdd = async (e) => {
        e.preventDefault();
        try {
            const token = JSON.parse(localStorage.getItem("Token"));
            const response = await axios.post(
                "http://localhost:8080/driverNew",
                {
                    name,
                    surname,
                    number,
                    email
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            console.log("add Data");
            navigate("/auth/driver")
        } catch (error) {
            console.error("failed", error);
        }
    };


    return (
        <form onSubmit={DriverAdd} className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setName}/>
                <Labellinput>Imię</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setSurname}/>
                <Labellinput>Nazwisko</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputField setData={setEmail}/>
                <Labellinput>Adres e-mail</Labellinput>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <InputFieldNumber setData={setPhonenumber}/>
                <Labellinput>numer telefonu</Labellinput>
            </div>
            <Button>Dodaj</Button>
        </form>
    );
};

export default DriverNew;