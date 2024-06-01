import React, { useState, useEffect } from 'react'
import axios from "axios";
import BoxIcon from '../assets/box.svg'

function CargoMyList(){

    const [cargo, setCargo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("Token"));
        console.log(token);
        axios
        .get(`${import.meta.env.VITE_API_URL}/my/cargo?page=${currentPage-1}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            setCargo(response.data.content);
            console.log(response.data.content);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, [currentPage]);

    const handlePreviousPage = (event) => {
        event.preventDefault(); 
        setCurrentPage(prev => Math.max(prev - 1, 1)); 
    };
    
    const handleNextPage = (event) => {
        event.preventDefault(); 
        setCurrentPage(prev => prev + 1);
    };
    
    if (!cargo) return null;
    
    return(
        <>
        <div className="flex items-center justify-center min-h-6">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <img src={BoxIcon} 
                    className="h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"/>
              </span>
              <span className="tracking-wide">Cargo</span>
            </div>
    
            <div className="text-gray-600">
              <div className="grid md:grid-cols-6 text-sm border-b-4 border-indigo-500">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Price</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Type</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">owner</div>
                  <div className="px-4 py-2">
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Loads</div>
                  <div className="px-4 py-2">
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Unload</div>
                  <div className="px-4 py-2">
                  </div>
                </div>
              </div>
            </div>

        {cargo.map((data, index)=>
          <div key={index} className="text-gray-600 border-b-4">
          <div className="grid md:grid-cols-6 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.cargoPrice}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.typeCargo}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.cargoOwner}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.loadAddress.city}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">{data.unloadAddress.city}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold"><a href={`/auth/my/cargo/${data.cargoId}`}>Szczegóły</a></div>
            </div>
          </div>
        </div>
        )}

        <div className="">
            <a href="#" onClick={handlePreviousPage} className="items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border 
            border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:hover:text-white">
            Previous
            </a>
            <a href="#" onClick={handleNextPage} className="items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border 
            border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:hover:text-white" >
                Next
            </a>
        </div>
        </div>
        </div>

</>
);
}
export default CargoMyList;