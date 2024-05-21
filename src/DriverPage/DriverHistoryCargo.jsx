import {useParams} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import axios from "axios";
import HistoryIcon from "../assets/history-svgrepo-com.svg"
import GridItemTitle from "../components/DataDisplay/GridItemTitle.jsx";
import GridItem from "../components/DataDisplay/GridItem.jsx";

function DriverHistoryCargo() {
    const {id} = useParams();
    const [cargo, setCargo] = useState(null);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Token"));
        axios
            .get(`http://localhost:8080/driver/history/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setCargo(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [id]);

    if (!cargo) return null;

    return (
        <>
            <div className="flex items-center justify-center min-h-6">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span className="text-green-500">
              <img
                  src={HistoryIcon}
                  className="h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              />
            </span>
                        <span className="tracking-wide">Historia zleceń</span>
                    </div>

                    <div className="text-gray-600">
                        <div className="grid md:grid-cols-6 text-sm border-b-4 border-indigo-500">
                            <GridItemTitle value={"Price"}/>
                            <GridItemTitle value={"Type"}/>
                            <GridItemTitle value={"Owner"}/>
                            <GridItemTitle value={"Loads"}/>
                            <GridItemTitle value={"Unload"}/>
                        </div>
                    </div>

                    {cargo.map((data, index) => (
                        <div key={index} className="text-gray-600 border-b-4">
                            <div className="grid md:grid-cols-6 text-sm">
                                <GridItem value={data.price}/>
                                <GridItem value={data.typeCargo}/>
                                <GridItem value={data.owner}/>
                                <GridItem value={data.loadAddress.city}/>
                                <GridItem value={data.unloadAddress.city}/>

                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        <a href={`/cargo/${data.id}`}>details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="">
                        <a
                            href="#"
                            className="items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border
            border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
            dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </a>
                        <a
                            href="#"
                            className="items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border
            border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
            dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DriverHistoryCargo;