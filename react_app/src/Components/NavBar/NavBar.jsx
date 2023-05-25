import React from "react";
import logoPikachu from "../../Assets/logo.png";
import { Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    function logoutHandler(e) {
        localStorage.removeItem("loggedUser");
        navigate("/");
    }
    
    function showProfile(e){
        navigate("/Profile")
    }

    function Volver(e){
        e.preventDefault()
        navigate("/Pokemon")
    }

    return (
        <Navbar
        className=" px-5 items-center shadow-2xl bg-red-500"
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="" onClick={(e)=>Volver(e)}>
            <img src={logoPikachu} className="mr-3 h-16" alt="Pokedex" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <b>Pokedex</b>
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className="flex md:order-2">
            <Dropdown
            arrowIcon={true}
            inline={true}
            label={
                <img
                src={loggedUser.image}
                alt="profile"
                className="w-9 h-9 rounded-full object-cover"
                />
            }
            >
            <Dropdown.Header>
                <span className="block text-sm">{loggedUser.alias}</span>
                <span className="block truncate text-sm font-medium">
                {loggedUser.email}
                </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={(e) => showProfile(e)}>Perfil</Dropdown.Item>
            <Dropdown.Item>Configuraciones</Dropdown.Item>
            <Dropdown.Item className="italic">By Marcos</Dropdown.Item>

            <Dropdown.Divider /> 
            <Dropdown.Item onClick={(e) => logoutHandler(e)}>
                Cerrar Sesión
            </Dropdown.Item>
            </Dropdown>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={true}>
                Home
            </Navbar.Link>
            <Navbar.Link>Main</Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    );
}