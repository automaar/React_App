/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { pedirPokemones, } from "../../Controllers/api";
import { Pagination } from "flowbite-react";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card"
import Footer from "../../Components/Footer/Footer";

export default function Main() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        pedirPokemones().then((res) => setPokemones(res));
    }, []);

      //PAGINATION---
    const [currentPage, setCurrentPage] = useState(1); 
    const [pokemonsPerPage, setPokemonsPerPage] = useState(20); 
    const indexOfLastPokemon = currentPage * pokemonsPerPage; 
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemones?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
    );

    function pagination(pageNumber) {
        setCurrentPage(pageNumber);
    }


    return (
        <div id="login">
            <NavBar />
            <div className="flex flex-col justify-center w-screen">
                <div className="flex items-center justify-center py-5 ">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={pokemones?.length}
                        onPageChange={pagination}
                    />
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 md:p-14 lg:grid lg:grid-cols-4 lg:p-14 justify-center items-center gap-5  py-10 bg-indigo-500">
                    {currentPokemons.length ? (currentPokemons.map((pokemon) => (
                        <Card
                            imagen={pokemon.imagen}
                            id={pokemon.id}
                            nombre={pokemon.nombre}
                        />))) : (<Loading />)}
                </div>
            </div>
            <Footer />
        </div>
    );
}