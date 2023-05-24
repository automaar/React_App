import React from "react";

export default function Pagination({
    pokemonesPerPage,
    pokemones,
    pagination,
    }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pokemones / pokemonesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-2/3">
        {pageNumbers?.map((number) => (
            <button key={number} className="border p-1 m-1 rounded-full bg-slate-500 bg-opacity-50" onClick={() => pagination(number)}>
            {number < 10 ? `0${number}` : number}
            </button>
        ))}
        </div>
    );
}