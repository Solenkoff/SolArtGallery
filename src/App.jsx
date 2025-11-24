import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import { useRef } from "react";

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
// import Logout from "./components/user/Logout";

import './App.css'

function App() {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
        <ContextProvider>
            <Header />
            <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    timeout={300}
                    classNames="slide"
                    unmountOnExit
                    nodeRef={nodeRef}
                >
                    <div ref={nodeRef}>
                        <Routes>

                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/authors" element={<AuthorList />} />

                            <Route path="/gallery">
                                <Route path="" element={<GalleryCatalog />} />
                                <Route path="details/:itemId" element={<ItemDetails />} />
                            </Route>

                            <Route path="/users">
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                {/* <Route path="logout" element={<Logout />} /> */}
                            </Route>

                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </ContextProvider>
    )
}

export default App
