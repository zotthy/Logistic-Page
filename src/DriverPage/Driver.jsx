import React, { useState, useEffect } from "react";
import axios from "axios";

function Driver(){
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    console.log(token);
    axios
      .get(`http://localhost:8080/drivers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setDriver(response.data.content);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  if (!driver) return null;


    return(
    <div className="flex items-center justify-center min-h-64 ">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <span className="tracking-wide">Driver</span>
        </div>

        <div className="text-gray-600">
          <div className="grid md:grid-cols-4 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Phone number</div>
              <div className="px-4 py-2">
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Loads</div>
              <div className="px-4 py-2">
              </div>
            </div>
          </div>
        </div>

        {driver.map((data, index)=>
          <div key={index} className="text-gray-600">
          <div className="grid md:grid-cols-4 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.surname}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.number}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                <a href={`/driver/${data.id}`}>Cargo list</a>
              </div>
            </div>
          </div>
        </div>
        )}   

        <div className="text-gray-600">
          <div className="grid md:grid-cols-1 text-sm">
            <a href="/driverNew" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Dodaj kierowce
            </a>
          </div>
        </div>

      </div>
    </div>
    );
}

export default Driver;