import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import users from "../../users.json";
import Swal from "sweetalert2";
import "../../Style/Style.css"
import user from "../../users.json";
import banner from "../../Assets/pokemon.png";

export default function Home() {
    const navigate = useNavigate(); //formateo el hook

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    function loginHandler(e) {
        e.preventDefault(); //prevenimos que se recargue

        const loggedUser = users.find(
        (user) => user.email === input.email && user.password === input.password
        );

        if (loggedUser) {
        

        Swal.fire({
            title: "¿Estas preparado para ser un maestro Pokemon?",
            text: "No te arrepentiras!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0DD90A",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Aceptar",
        }).then((result) => {
            if (result.isConfirmed) {
            localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
            navigate("/pokemon");
            } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No puedes contiunar si no aceptas!",
            });
            }
        });
        } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Los datos ingresados no son validos!",
            footer: '<a href="">Olvidé mi contraseña</a>',
        });
        }
    }

    function inputHandler(e) {
        //para yo tener la palabra user tengo que apuntar a e.target.name o .id
        setInput({ ...input, [e.target.id]: e.target.value });
    }

    return (
            <div className="flex flex-col h-full items-center md:gap-16 lg:gap-10 bg-indigo-500 py-20 p-5 ">
                <img src={banner} alt="logo" className="w-45 md:w-96 lg:w-96 p-0"/>
                <form id="formulario" className="flex flex-col justify-center items-center w-72 h-72 lg:w-96 lg:h-96 rounded-full gap-10 bg-gray-300 " action="submit" onSubmit={(e) => loginHandler(e)}>
                    <input id="email" name="email" className="w-7/12 rounded-full bg-opacity-50 bg-[#FE3929] "  type="email" placeholder="Ingresa tu email..."
                    onChange={(e) => inputHandler(e)} />
                    <button type="submit"
                    className="flex items-center justify-center ring w-16 h-16 rounded-full bg-white hover:bg-[#FE3929]">
                    
                    </button>
                    <input id="password" name="password" className="w-7/12 rounded-full bg-opacity-50 bg-[#A1A1A1]" type="password"  placeholder="Contraseña..."
                    onChange={(e) => inputHandler(e)}/>
                </form>
            </div>
        );



}