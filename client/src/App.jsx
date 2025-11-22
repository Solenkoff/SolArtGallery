import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider"

import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GalleryCatalog from './components/gallery/GalleryCatalog'
import ItemDetails from './components/gallery/ItemDetails'
import AuthorList from './components/author/AuthorList'
import ContactUs from './components/contact/ContactUs'
import Footer from './components/footer/Footer'

import './App.css'

function App() {

    return (
        <ContextProvider>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/author" element={<AuthorList />} />


                <Route path="/gallery">
                    <Route path="" element={<GalleryCatalog />} />
                    <Route path="details/:itemId" element={<ItemDetails />} />
                </Route>

                <Route path="/users">      // !!!
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

            </Routes>
            <Footer />
        </ContextProvider>
    )
}

export default App
