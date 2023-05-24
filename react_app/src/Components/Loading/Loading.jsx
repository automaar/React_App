import { Spinner } from 'flowbite-react'
import React from 'react'

export default function Loading() {
    return (
        <>
        <div className="flex flex-col items-center p-5 w-1/2 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl">
        <Spinner
            color="warning"
            aria-label="Warning spinner example"
            size="xl"
        />
        </div>
        <div className="flex flex-col items-center p-5 w-1/2 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl">
        <Spinner
            color="warning"
            aria-label="Warning spinner example"
            size="xl"
        />
        </div>
        <div className="flex flex-col items-center p-5 w-1/2 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl">
        <Spinner
            color="warning"
            aria-label="Warning spinner example"
            size="xl"
        />
        </div>
        <div className="flex flex-col items-center p-5 w-1/2 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl">
        <Spinner
            color="warning"
            aria-label="Warning spinner example"
            size="xl"
        />
        </div>
    </>
    )
}