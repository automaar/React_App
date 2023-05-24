import React, { useEffect, useState} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { buscarDetalle } from "../../Controllers/api";

export default function Detail() {
    const paramId = useParams("id");
    const [detail, setDetail] = useState({});

    useEffect(() => {
        buscarDetalle(paramId.id).then((res) => setDetail(res));
    },[]);

    console.log(detail);

    return (
        <div id="login" className="">
            <NavBar />
            <div className="flex flex-col items-center justify-center py-5">
                <div className="bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl w-3/5">
                    <h1 className="text-6xl py-5 font-bold text-center text-indigo-500 border-b border-indigo-500 p-2 ">
                        {" "}
                        {detail.nombre?.replace(
                            detail.nombre[0],
                            detail.nombre[0].toUpperCase()
                        )}
                    </h1>

                    <div className="columns-2 py-5">
                        <div className=""> 
                            <img src={detail.imagen} alt="" />
                        </div>

                        <div className="px-10">
                            <h1 className="text-xl font-semibold">Tipo:</h1>
                        <div>
                            {detail.tipo?.map((tipo) => (
                            <span key={detail.id} className="text-xl">
                                {tipo.replace(tipo[0], tipo[0].toUpperCase())}{" "}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}