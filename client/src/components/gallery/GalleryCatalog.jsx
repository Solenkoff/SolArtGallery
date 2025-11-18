
export default function GalleryCatalog() {

    return (
        <section className="min-h-screen bg-gray-800 text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-black gothic mb-12 drop-shadow-lg text-center pt-16">Our full Catalog</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="/images/gioconda.jpg"
                                alt="Art Name"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-white text-lg font-semibold">Gioconda</span>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="/images/night-walk.jpg"
                                alt="Art Name"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-white text-lg font-semibold">Night Walk</span>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="/images/abstract.jpg"
                                alt="Art Name"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-white text-lg font-semibold">Abstract</span>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}