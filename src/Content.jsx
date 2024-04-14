import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
  const [cargos, setCargos] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    axios.get(`http://localhost:8080/cargo?page=${page}&size=${size}`)
       .then(response => {
          setCargos(response.data.content);
       }).catch(error => {
         console.error('Error', error);
       });
  }, [page, size]);

  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg p-20">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Description cargo
                </th>
                <th scope="col" className="px-6 py-3">
                    Load address
                </th>
                <th scope="col" className="px-6 py-3">
                    Unload address
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Details
                </th>
            </tr>
        </thead>
        <tbody>
        {cargos && cargos.map((cargo, index) => (
          <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {cargo.typeCargo}
            </th>
            <td className="px-6 py-4">{cargo.loadAddress.city}</td>
            <td className="px-6 py-4">{cargo.unloadAddress.city}</td>
            <td className="px-6 py-4">${cargo.price}</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
            </td>
          </tr>  
        ))}
        </tbody>
    </table>
</div>

    );
}

export default Content;