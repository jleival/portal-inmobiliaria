import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Administracion() {
    const { user, setUser } = useContext(UserContext);

    const cerrarSesion = () => {
        setUser(null);
    };

    return (
        <div className="mt-5 container">
            <h1>🏢 Panel de Administración Inmobiliaria</h1>
            <p className="text-muted">
                Bienvenido <strong>{user.displayName}</strong> ({user.email})
            </p>

            <button className="btn btn-danger mt-3" onClick={cerrarSesion}>
                Cerrar Sesión
            </button>
        </div>
    )
}
