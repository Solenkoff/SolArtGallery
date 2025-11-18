export default function Footer() {
    return (
        <footer className="bg-black text-red-600 py-3 absolute bottom-0 fixed w-full ">
            <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-4">
                <div className="flex justify-center gap-6 mt-0">

                    <div className="flex justify-center gap-6 mt-0">
                        <p className="text-sm">&copy; {new Date().getFullYear()} SolArt Gallery. All rights reserved.</p>
                    </div>
                    <a
                        href="https://www.instagram.com" className="text-red-500 hover:text-red-700 mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram text-6xl"></i>
                    </a>
                    <a href="https://www.facebook.com" className="text-red-500 hover:text-red-700 mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook text-6xl"></i>
                    </a>
                    <a
                        href="https://x.com"
                        className="text-red-500 hover:text-red-700 mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-x-twitter text-6xl"></i>
                    </a>
                    <a
                        href="https://www.tiktok.com"
                        className="text-red-500 hover:text-red-700 mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-tiktok text-6xl"></i>
                    </a>

                </div>

            </div>
        </footer>
    );
}