import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { pedirPokemones, buscarDetalle } from "../../Controllers/api";
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
  /* 1 */ const [currentPage, setCurrentPage] = useState(1); //Pagina actual-----nos va a decir en que pagina empezamos y luego en cual estamos
  /* 2 */ const [pokemonsPerPage, setPokemonsPerPage] = useState(20); //cuantas tarjetas voy a mostrar por pagina
  /* 3 */ const indexOfLastPokemon = currentPage * pokemonsPerPage; //indice del ultimo pokemon
  /* 4 */ const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //indice del primero
  /* 5 */ const currentPokemons = pokemones?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); //son los pokemones actuales que voy a mostrar en mi página

  /* 6 */ function pagination(pageNumber) {
    setCurrentPage(pageNumber);
    }


    return (
        <div id="login">
            <NavBar />

            <div className="flex flex-col justify-center w-screen">
                <div className="flex items-center justify-center ">
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