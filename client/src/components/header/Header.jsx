export default function Header() {

    return (
        <header className="bg-black text-red-600 shadow-lg fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <h1 className="text-3xl font-black tracking-widest gothic">SolArtGallery</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Authors</a></li>
                        <li><a href="">Inquire</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </nav>

            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-black text-red-600 flex flex-col gap-4 p-4 shadow-lg"
                >
                    {navigation.map(renderNav)}
                </motion.div>
            )}
        </header>
    );
}