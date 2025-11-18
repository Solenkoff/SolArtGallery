import './App.css'
import ContactUs from './components/contact/ContactUs'
import Footer from './components/footer/Footer'
import GalleryCatalog from './components/gallery/GalleryCatalog'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {

    return (
        <>
            <Header />
            <ContactUs />
            <Home />
            <GalleryCatalog/>
            <Footer />
        </>
    )
}

export default App
