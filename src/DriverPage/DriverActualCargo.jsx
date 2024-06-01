// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import MapTest from "../assets/mapTest.png";

function DriverActualCargo() {
    const {id} = useParams();
    const [cargoDetails, setCargoDetails] = useState(null);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Token"));
        console.log(token);
        axios
            .get(`http://localhost:8080/driver/actual/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setCargoDetails(response.data[0]);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [id]);

    const completeCargo = async (cargoId)=>{
        console.log(cargoId);
        try{
            await axios
                .get(`http://localhost:8080/driver/complete/${cargoId}`, null, {
            });

        }
        catch (error){
            console.log("Error:", error);
        }
    }

    console.log(cargoDetails);
    if (!cargoDetails) return null;

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h1 className="mt-1 max-w-2xl text-4xl leading-6 text-gray-500">
                    Szczegóły ładunku
                </h1>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Koszt przewozu
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {`${cargoDetails.price} zł`}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Opis ładunku
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {cargoDetails.typeCargo}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Wlaściciel
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <a href={`/check/${cargoDetails.owner}`}>{cargoDetails.owner}</a>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Data utworzenia
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {cargoDetails.dateTime}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Adres załadunku
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <p>{cargoDetails.loadAddress.city}</p>
                            <p>{cargoDetails.loadAddress.province}</p>
                            <p>{cargoDetails.loadAddress.zip_code}</p>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Adres rozładunku
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <p>{cargoDetails.unloadAddress.city}</p>
                            <p>{cargoDetails.unloadAddress.province}</p>
                            <p>{cargoDetails.unloadAddress.zip_code}</p>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Mapa</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <img
                                width="500"
                                height="300"
                                src={MapTest}
                                className="border-4 rounded-md"
                            />
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <button onClick={()=>completeCargo(cargoDetails.id)}>
                                Zakończ zlecenie!
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}

export default DriverActualCargo;