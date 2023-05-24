
export async function pedirPokemones(numero) {

    if (!numero) numero = 20
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numero}`);

    const jsondata = await data.json();

    const pokemones = jsondata.results;

    let arrayDePokemones = [];

    for (let i = 0; i < pokemones.length; i++) {
        const pokemon = pokemones[i];
    
        const caracteristicas = await (await fetch(pokemon.url)).json();
    
        const pokemonBuscado = {
            id: caracteristicas.id,
            nombre: caracteristicas.name,
            tipo: caracteristicas.types.map((objeto) => objeto.type.name),
            imagen: caracteristicas.sprites.other.dream_world.front_default,
        };
    
        arrayDePokemones.push(pokemonBuscado);
    }
    return arrayDePokemones;
    }

  // export async function buscarPorNombre(pokemonName) {
  //   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  //   const caracteristicas = await data.json();

  //   const nombre = caracteristicas.name; //"string"
  //   const imagen = caracteristicas.sprites.other.dream_world.front_default; //"string"
  //   const tipo = caracteristicas.types.map((objeto) => objeto.type.name); //"string"

  //   const pokemonHTML = `
  //         <div class="pokemonCard">
  //         <img src="  ${imagen} " />
  //             <div>
  //                <span id="nombrePokemon"> ${nombre} </span>
  //             </div>
  //              <div id="tipos-container"> 
  //                 <span>Tipo</span>
  //                 <span id="tipoPokemon"> ${tipo} </span>
  //              </div>                
  //         </div>
  //         `;

  //   root.innerHTML += pokemonHTML;
  // }
    export async function buscarDetalle(id) {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const caracteristicas = await data.json();
    
        const pokemonBuscado = {
        id: caracteristicas.id,
        nombre: caracteristicas.name,
        tipo: caracteristicas.types.map((objeto) => objeto.type.name),
        imagen: caracteristicas.sprites.other.dream_world.front_default,
        };
    
        return pokemonBuscado;
    }