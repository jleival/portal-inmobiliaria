import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [id, setId] = useState('');
    const navigate = useNavigate();
    const irAPropiedades = () => {
        if (id === '') {
            alert('Por favor, selecciona una propiedad antes de buscar.');
            return;
        }
        navigate(`/propiedades/${id}`);
    }
    return (
        <div className="mt-5 container">
            <h1>🏡 Encuentra tu Propiedad Ideal</h1>
            <p className="text-muted">Selecciona el código de la propiedad para ver su ficha técnica</p>

            <div className="d-flex justify-content-center gap-2 mt-4">
                <select 
                    className="form-select w-auto"
                    value={id}
                    onChange={({ target }) => setId(target.value)}
            >
                <option value="">-- Selecciona una propiedad --(1 al 5)</option>
                <option value="1">Propiedad #1 - Casa Mediterránea (Las Condes)</option>
                <option value="2">Propiedad #2 - Depto Loft (Providencia)</option>
                <option value="3">Propiedad #3 - Parcela con Piscina (Chicureo)</option>
                <option value="4">Propiedad #4 - Penthouse Vista al Mar (Viña del Mar)</option>
                <option value="5">Propiedad #5 - Cabaña Bosque Nativo (Pucón)</option>
                </select>
                <button className="btn btn-success" onClick={irAPropiedades}>
                    Buscar Propiedad
                </button>
            </div>
        </div>
    )
}
