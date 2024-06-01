import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import InputAuth from '../components/inputs/InputAuth';
import LabelFromAuth from '../components/labels/LabelFromAuth';
import ButtonAuth from '../components/buttons/ButtonAuth';
import userIcon from "../assets/userIcon.svg"

function Register() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerRequest = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
          firstName: name,
          lastName:surname,
          email:email,
          password:password
        });
        navigate("/success");
      } catch (error) {
        if (error.response && error.response.status === 400) {
            console.error('Bad Request: ', error.response.data);
            navigate("/fail");
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
          Stwórz nowe konto!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Wprowadź swoje dane, aby się zarejestrować.
        </p>
        <form onSubmit={registerRequest}>
          <div className="mb-4">
            <LabelFromAuth>Imię</LabelFromAuth>
            <InputAuth initialType="text" placeholderPattern="James" setValue={setName}/>
          </div>
          <div className="mb-4">
            <LabelFromAuth>Nazwisko</LabelFromAuth>
            <InputAuth initialType="text" placeholderPattern="Kowalski" setValue={setSurname}/>
          </div>
          <div className="mb-4">
            <LabelFromAuth>Adres e-mail</LabelFromAuth>
            <InputAuth initialType="email" placeholderPattern="JamesKow@com.pl" setValue={setEmail}/>
          </div>
          <div className="mb-6">
            <LabelFromAuth>Password</LabelFromAuth>
            <InputAuth initialType="password" placeholderPattern="*******" setValue={setPassword}/>
          </div>
            <ButtonAuth>Register</ButtonAuth>
        </form>
      </div>
    </div>
  );
}

export default Register;
