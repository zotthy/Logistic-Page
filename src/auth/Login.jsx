import React, { useState } from 'react';
import axios from "axios";
import { redirect } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';


class signInComponent extends React.Component {
  state={email: '', password: ''}

  onSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8080/login', this.state)
          .then((res)=>{
              if(res.status === 200){
                  if(this.props.signIn({
                      auth: {
                          token: 'ey....mA',
                          type: 'Bearer'
                      }
                  })){
                      // Redirect or do-something
                  }else {
                      //Throw error
                  }
              }
          })
  }
}
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
              <path fill="currentColor" />
            </svg>
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Login to your account
        </h2>
        <form onSubmit={loginRequest}> 
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              value={email}
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@com.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password * </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
