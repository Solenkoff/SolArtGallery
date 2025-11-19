import './App.css'
import AuthorList from './components/author/AuthorList'
import ContactUs from './components/contact/ContactUs'
import Footer from './components/footer/Footer'
import GalleryCatalog from './components/gallery/GalleryCatalog'
import ItemDetails from './components/gallery/ItemDetails'
import Header from './components/header/Header'
import Home from './components/home/Home'
import LoginUser from './components/user/LoginUser'
import RegisterUser from './components/user/RegisterUser'

function App() {

    return (
        <>
            <Header />
            <ContactUs />
            <Home />
            <GalleryCatalog/>
            <ItemDetails />
            <AuthorList />
            <LoginUser />
            <RegisterUser />
            <Footer />
        </>
    )
}

export default App
