import React, { useEffect, useState} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { buscarDetalle } from "../../Controllers/api";
import Footer from "../../Components/Footer/Footer";

export default function Detail() {
    const paramId = useParams("id");
    const [detail, setDetail] = useState({});

    useEffect(() => {
        buscarDetalle(paramId.id).then((res) => setDetail(res));
    },[]);

    console.log(detail.imgPoke);

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
                        <div className="flex justify-center"> 
                            <img src={detail.imagen} alt="Pokeimagen" className="w-4/5" />
                        </div> 

                        <div className="px-2">
                            
                            
                            

                            <table className="">
                                <thead >
                                    <tr className="border-b border-indigo-500">
                                        <th>
                                            <h1 className="text-xl font-semibold px-2">Tipo:</h1>
                                        </th>
                                        <th className="border-x border-indigo-500 px-5">
                                            <h1 className="text-xl font-semibold ">Vida:</h1>
                                        </th>
                                        <th>
                                            <h1 className="text-xl font-demibold">Abilidad:</h1>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th>
                                            <div>
                                                {detail.tipo?.map((tipo) => (
                                                <span key={detail.id} className="">
                                                    {tipo.replace(tipo[0], tipo[0].toUpperCase())}{" "}
                                                </span>
                                                ))}
                                            </div>
                                        </th>
                                        <th className="border-x border-indigo-500">
                                            <div>
                                                <span>{detail.vida}</span>
                                            </div>
                                        </th>
                                        <th>
                                            <span>
                                                {detail.abilidad?.map((abilidad) => (
                                                    <span key={detail.id} className="">
                                                        {abilidad.replace(abilidad[0], abilidad[0].toUpperCase())}{" "}
                                                    </span>
                                                ))}
                                            </span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div className="flex justify-center">
                                <img src={detail.imgPokeF} alt="imgPokeF" className="w-52"/>
                                <img src={detail.imgPokeB} alt="imgPokrB" className="w-52"/>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}