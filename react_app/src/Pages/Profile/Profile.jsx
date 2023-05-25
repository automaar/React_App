import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function Profile(){

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    return(
        <div>
            <NavBar/>


            <div className="flex items-center justify-center py-5">
                <div className="flex flex-cols-2 justify-center text-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl w-3/5 p-12">

                    <div className="pr-5">
                        <img src={loggedUser.image} alt="ImagenProfile" className="w-36 h-36 rounded-full object-cover"/>
                    </div>

                    <div className="border-l border-indigo-500">
                        <h1 className="border-b border-indigo-500 flex p-2">Nombre:<p className="pl-2">  {loggedUser.alias}</p></h1>

                        <h1 className="border-b border-indigo-500 flex p-2">Correo: <p className="pl-2">{loggedUser.email}</p></h1>

                        <h1 className="flex p-2">Contraseña: <p className="pl-2">{loggedUser.password}</p> </h1>
                    </div>
                    
                </div>
            </div>





            <Footer/>
        </div>
        
    )
}