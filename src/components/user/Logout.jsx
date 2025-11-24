import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { clearUserData } from "../../utils/userSession"
import userService from "../../api/userService"
import context from "../../context/context"

export default function Logout() {
    const { setUserSession } = useContext(context)

    useEffect(() => {
        userService.logoutUser().then(() => {
            clearUserData();
            setUserSession(null);
        })
    }, [setUserSession])
    return (
        <Navigate to={'/'} />
    )
}