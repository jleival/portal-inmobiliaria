import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const iniciarSesion = (e) => {
        e.preventDefault();

        if (nombre.trim() === "" || email.trim() === "") {
            alert("Por favor, ingresa tu nombre y tu correo electrónico.");
            return;
        }

        setUser({
            displayName: nombre,
            email: email,
        });

        navigate("/admin");
    };

    return (
        <div className="mt-5 container">
            <h1>🔑 Acceso a corredores</h1>
            <p className="text-muted">
                Ingresa tus datos para gestionar el catálogo de propiedades.
            </p>

            {user ? (
                <div className="alert alert-success d-inline-block mt-3">
                    Ya tienes una sesión activa como <strong>{user.displayName}</strong>
                </div>
            ) : (
                <form
                    onSubmit={iniciarSesion}
                    className="mx-auto mt-4 p-4 border rounded shadow-sm bg-light"
                    style={{ maxWidth: "400px" }}
                >
                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold">Nombre del Corredor</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej: Jorge Corredor"
                            value={nombre}
                            onChange={({ target }) => setNombre(target.value)}
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Ej: jorge@inmoportal.cl"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Iniciar Sesión
                    </button>
                </form>
            )}
        </div>
    );
}