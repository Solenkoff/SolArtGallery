export default function ItemDetails() {
    
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black p-6">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-6">Item Details</h2>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                        <img
                            src="/images/gioconda.jpg"
                            alt="Item Name"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full sm:w-1/2 sm:pl-8">
                        <h3 className="text-2xl font-semibold mb-4">Item Number</h3>
                        <p className="text-lg mb-4">Author: AuthorName</p>
                        <p className="text-lg mb-4">Description</p>
                    </div>
                </div>

                <div className="mt-12">
                    <a
                        href=""
                        className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Back to Gallery
                    </a>
                </div>
            </div>
        </section>
    );
}