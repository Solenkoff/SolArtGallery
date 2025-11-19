import { useState, useEffect } from "react";

export default function AuthorList() {

    return (
        <section className="min-h-screen bg-gray-800 text-white py-16">
            <h2 className="text-4xl font-black gothic mb-12 drop-shadow-lg text-center pt-16">Our Authors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
                <div  className="relative group w-72 h-96 bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-red-800">
                    <img
                        src="/images/gioconda.jpg"
                        alt="Bobo"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <div className="p-4 flex flex-col items-center">
                        <h3 className="text-2xl font-bold gothic text-white">Bobo</h3>
                        <p className="text-sm text-gray-300 text-center mt-2">Details about the author</p>
                    </div>
                </div>
                <div className="relative group w-72 h-96 bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-red-800">
                    <img
                        src="/images/gioconda.jpg"
                        alt="Pesho"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <div className="p-4 flex flex-col items-center">
                        <h3 className="text-2xl font-bold gothic text-white">Pesho</h3>
                        <p className="text-sm text-gray-300 text-center mt-2">Details about the author</p>
                    </div>
                </div>
            </div>
        </section>
    );
}