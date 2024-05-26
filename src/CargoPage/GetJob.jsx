// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import DivData from "../components/DataDisplay/DivData.jsx";

function GetJob() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [driver, setDriver] = useState(null);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Token"));
        console.log(token);
        axios
            .get(`http://localhost:8080/drivers/avalible`, {
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

    const takeOrder = async (driverId) => {
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
            navigate("/auth/cargo/success");

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
                    <div className="grid md:grid-cols-3 text-sm">
                        <DivData value={"Imię"}/>
                        <DivData value={"Nazwisko"}/>
                    </div>
                </div>

                {driver.map((data, index) => (
                    <div key={index} className="text-gray-600">
                        <div className="grid md:grid-cols-3 text-sm">
                            <DivData value={data.name}/>
                            <DivData value={data.surname}/>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    <button
                                        onClick={() => takeOrder(data.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Przypisz
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
