import React, { useState } from "react";
// import { Label, TextInput, Checkbox, Button } from "flowbite-react";
export default function Numerito() {
    const [input, setInput] = useState({});
    const [numerito, setNumerito] = useState(1);


    function sumar1(e) {
        e.preventDefault();
        setNumerito(numerito + 1);
        // setNumerito();
    }
    function sumar3(e) {
        e.preventDefault();
        setNumerito(numerito + 3);
    }
    function divide2(e) {
        e.preventDefault();
        setNumerito(numerito / 2);
    }
    function redondearMax(e){
        e.preventDefault()
        let numRedondeadoC = Math.ceil(numerito);
        setNumerito(numRedondeadoC)
    }
    function redondearMin(e){
        e.preventDefault()
        let numRedondeadoC = Math.floor(numerito);
        setNumerito(numRedondeadoC)
    }

    console.log("ESTE ES EL NUMERO AHORITA", numerito);
    return (
        <div className="flex flex-col justify-center items-center h-full  mt-5 ml-5">
        {/* ----------- */}
        <div className="flex flex-col justify-center items-center bg-blue-500  w-96 h-auto font-bold">
            <p className="text-5xl"> {numerito}</p>
            <button
                className="bg-gray-300 rounded-lg p-5"
                onClick={(e) => sumar1(e)}
            >
                sumar por 1
            </button>
            <button
                className="bg-gray-300 rounded-lg p-5"
                onClick={(e) => sumar3(e)}
            >
                sumar por 3
            </button>
            <button
                className="bg-gray-300 rounded-lg p-5"
                onClick={(e) => divide2(e)}
            >
                dividir por 2
            </button>
            <button
                className="bg-gray-300 rounded-lg p-5"
                onClick={(e) => redondearMax(e)}
            >
                Redondear a Mayor
            </button>
            <button
                className="bg-gray-300 rounded-lg p-5"
                onClick={(e) => redondearMin(e)}
            >
                Redondear a Minimo
            </button>
        </div>
    </div>
    );
}