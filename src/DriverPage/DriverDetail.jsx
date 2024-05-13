import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GridItem from "../components/DataDisplay/GridItem";
import GridItemTitle from "../components/DataDisplay/GridItemTitle";

function DriverDetail() {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    axios
      .get(`http://localhost:8080/driver/${id}/cargos`, {
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
  }, [id]);

  if (!driver) return null;

  return (
    <>
      <div className="flex items-center justify-center min-h-6">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="text-gray-600">
            <div className="grid md:grid-cols-6 text-sm border-b-4 border-indigo-500">
              <GridItemTitle value={"Price"} />
              <GridItemTitle value={"Type"} />
              <GridItemTitle value={"Owner"} />
              <GridItemTitle value={"Loads"} />
              <GridItemTitle value={"Unload"} />
            </div>
          </div>

          {driver.map((data, index) => (
            <div key={index} className="text-gray-600 border-b-4">
              <div className="grid md:grid-cols-6 text-sm">
                <GridItem value={data.price} />
                <GridItem value={data.typeCargo} />
                <GridItem value={data.owner} />
                <GridItem value={data.loadAddress.city} />
                <GridItem value={data.unloadAddress.city} />

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    <a href={`/cargo/${data.id}`}>details</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DriverDetail;
