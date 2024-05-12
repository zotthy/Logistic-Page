import React, { useState, useEffect } from "react";
import axios from "axios";

function DriverDetail(){
    
    const [driver, setDriver] = useState(null);

    const driverId = 5;
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Token"));
        axios.get(`http://localhost:8080/driver/${driverId}//cargos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setDriver(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }, [driverId]);
      if (!driver) return null;


      return (
        <div>
          <h1>Driver Details</h1>
    
          {driver.map((data, i) => (
            <div key={i}>
              <h2>Cargo {i + 1}</h2>
              <p>Price: {data.price}</p>
              <p>Type of cargo: {data.typeCargo}</p>
              <p>Status: {data.status}</p>
              <p>Date time: {data.dateTime}</p>
    
              <h3>Load Address</h3>
              <p>Street: {data.loadAddress.street}</p>
              <p>City: {data.loadAddress.city}</p>
              <p>Zip code: {data.loadAddress.zip_code}</p>
    
              <h3>Unload Address</h3>
              <p>Street: {data.unloadAddress.street}</p>
              <p>City: {data.unloadAddress.city}</p>
              <p>Zip code: {data.unloadAddress.zip_code}</p>
            </div>
          ))}
        </div>
      );
}


export default DriverDetail;