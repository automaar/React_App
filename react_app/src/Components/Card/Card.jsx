import React from 'react'
import { Link } from "react-router-dom";

export default function Card({id, imagen, nombre}) {
    return (
        
            <Link to={`/pokemon/${id}`} className="flex flex-col justify-center items-center">
                <div key={id} className="flex flex-col items-center w-10/12 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl">
                    <img src={imagen} alt="" className="w-56  border-b border-indigo-500 p-2" />
                    <div className="flex flex-col py-2">
                                <span className="text-3xl font-bold text-indigo-500">{nombre.replace(nombre[0],nombre[0].toUpperCase())}</span>
                    </div>
                </div>
            </Link>
    )
}