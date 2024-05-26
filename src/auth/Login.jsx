import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import InputAuth from '../components/inputs/InputAuth';
import LabelFromAuth from '../components/labels/LabelFromAuth';
import ButtonAuth from '../components/buttons/ButtonAuth';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/login`, {
                username: email,
                password: password
            });
            localStorage.setItem('Token', JSON.stringify(response.data));
            console.log(response.data);
            navigate("/auth/home");
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24">
              <path fill="currentColor"/>
            </svg>
          </span>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Login to your account
                </h2>
                <form onSubmit={loginRequest}>
                    <div className="mb-4">
                        <LabelFromAuth>E-mail*</LabelFromAuth>
                        <InputAuth initialType="text" placeholderPattern="user@com.pl" setValue={setEmail}/>
                    </div>
                    <div className="mb-6">
                        <LabelFromAuth>Hasło*</LabelFromAuth>
                        <InputAuth initialType="text" placeholderPattern="*******" setValue={setPassword}/>
                    </div>
                    <ButtonAuth>Login</ButtonAuth>
                </form>
            </div>
        </div>
    );
}

export default Login;
