import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import RegisterFail from './RegisterFail';
import InputAuth from '../components/inputs/InputAuth';
import LabelFromAuth from '../components/labels/LabelFromAuth';
import ButtonAuth from '../components/buttons/ButtonAuth';
import userIcon from "/Users/sebastianstarzec/LogisticApiFront/my-project/src/assets/userIcon.svg"

function Register() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerRequest = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:8080/register`, {
          firstName: name,
          lastName:surname,
          email:email,
          password:password
        });
        navigate("/success");
      } catch (error) {
        if (error.response && error.response.status === 400) {
            console.error('Bad Request: ', error.response.data);
            navigate("/fail")//user is exists
        } 
    }
    };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <img src={userIcon} 
              width="24"
              height="24"
              viewBox="0 0 24 24"/>
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a new account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your details to register.
        </p>
        <form onSubmit={registerRequest}>
          <div className="mb-4">
            <LabelFromAuth>Name</LabelFromAuth>
            <InputAuth initialType="text" placeholderPattern="James" setValue={setName}/>
          </div>
          <div className="mb-4">
            <LabelFromAuth>Surname</LabelFromAuth>
            <InputAuth initialType="text" placeholderPattern="Kowalski" setValue={setSurname}/>
          </div>
          <div className="mb-4">
            <LabelFromAuth>E-mail</LabelFromAuth>
            <InputAuth initialType="email" placeholderPattern="JamesKow@com.pl" setValue={setEmail}/>
          </div>
          <div className="mb-6">
            <LabelFromAuth>Password</LabelFromAuth>
            <InputAuth initialType="password" placeholderPattern="*******" setValue={setPassword}/>
            <p className="text-gray-600 text-xs mt-1">
             Min. 8 characters.
            </p>
          </div>
            <ButtonAuth>Register</ButtonAuth>
          <p className="text-gray-600 text-xs text-center mt-4">
            By clicking Register, you agree to accept Apex Financial's
            <a href="#" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
