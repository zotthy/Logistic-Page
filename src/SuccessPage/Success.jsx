// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import SuccesIcon from "../assets/correct-success-tick-svgrepo-com.svg";

function SuccessPage() {
    return(
        <div className="bg-gray-100 min-h-max">
            <div className="bg-white p-6  md:mx-auto">
                <img className="text-red-600 w-16 h-16 mx-auto my-6" src={SuccesIcon}/>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Ładunek został podjety</h3>
                    <div className="py-10 text-center">
                        <a href="/auth/home" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                            Strona główna
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SuccessPage;