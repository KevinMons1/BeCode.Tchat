import React from 'react'
import { Navigate } from "react-router-dom"
import Auth from "./Auth"

export default function ProtectedRoute({ component: Component, ...rest }) {
    return rest.connexion ? (
        Auth.isAuth()
        ? <Navigate to="/home" />
        : <Component {...rest} />
    ) : (
        Auth.isAuth()
        ? <Component {...rest} />
        : <Navigate to="/" />
    )
}
