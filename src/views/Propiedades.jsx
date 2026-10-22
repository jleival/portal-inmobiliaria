import { useParams } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import { catalogoPropiedades } from "../data/propiedades";

export default function Propiedades() {
    const { id } = useParams();

    const propiedad = catalogoPropiedades.find((item) => item.id === id);

    return (
        <div className="mt-4 container d-flex justify-content-center">
            {propiedad ? (
                <Card style={{ width: "24rem" }} className="shadow-sm">
                    <Card.Img variant="top" src={propiedad.imagen} alt={propiedad.titulo} />
                    <Card.Body>
                        <Badge bg="success" className="mb-2">
                            Código #{propiedad.id} - {propiedad.precio}
                        </Badge>
                        <Card.Title>{propiedad.titulo}</Card.Title>
                        <Card.Text className="text-muted mb-1">
                            📍 {propiedad.ubicacion}
                        </Card.Text>
                        <Card.Text className="fw-bold">
                            🛏️ {propiedad.habitaciones}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <div className="alert alert-warning mt-4">
                    <h4>⚠️ Propiedad no encontrada</h4>
                    <p className="mb-0">
                        No se encontró ninguna propiedad con el código <strong>#{id || "sin especificar"}</strong>.
                        Por favor, vuelve al Home y selecciona una propiedad válida.
                    </p>
                </div>
            )}
        </div>
    );
}