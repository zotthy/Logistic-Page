// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";

function StartPage() {
    console.log("StartPage");
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
                <div className="text-2xl font-semibold mb-4">Projekt realizowny na prace inżynierską</div>
                <div className="text-lg text-gray-700 mb-4">Temat pracy: Opracowanie i wdrożenie platformy logistycznej
                    w branży transportowej
                </div>
                <div className="text-lg text-gray-700">Autor: Sebastian Starzec</div>
            </div>
        </div>
    );
}

export default StartPage;
