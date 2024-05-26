import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileDetails() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    console.log(token);
    axios
      .get(`http://localhost:8080/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!profile) return null;

  return (
    <div className="flex items-center justify-center min-h-64 ">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <span className="tracking-wide">My Profile</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{profile.firstName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{profile.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Address.</div>
              <div className="px-4 py-2">
                {profile.address ? (
                  <div>
                    <p>Street: {profile.address.street}</p>
                    <p>City: {profile.address.city}</p>
                    <p>Zip Code: {profile.address.zip_code}</p>
                  </div>
                ) : (
                  <a href="/auth/addAdress" className="text-red-700">Dodaj</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
