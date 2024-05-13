import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GetJob() {
  const { id } = useParams();
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
        setDriver(response.data.content);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const sendDataToBackend = async (driverId) => {
    console.log(id);
    try {
      const token = JSON.parse(localStorage.getItem("Token"));
      console.log(token);  
      
      const response = await axios.post(
        `http://localhost:8080/orders/cargo/${id}/take/${driverId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(driver);

  if (!driver) return null;
  return (
    <div className="flex items-center justify-center min-h-64 ">
      <div className="bg-white p-3 shadow-sm rounded-sm">
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
              <div className="px-4 py-2"></div>
            </div>
          </div>
        </div>

        {driver.map((data, index) => (
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
                  <button
                    onClick={() => sendDataToBackend(data.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    assign
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default GetJob;
