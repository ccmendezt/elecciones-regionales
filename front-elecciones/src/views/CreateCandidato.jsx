import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function CreateCandidato() {
  let navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [nombre, setNombre] = useState("");
  const [partido, setPartido] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const response = await axios.get(`${apiUrl}/partidopolitico`);
        setPartidos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPartidos();
  }, []);

  const handleCreateCandidato = async () => {
    try {
      const response = await axios.post(`${apiUrl}/candidatos`, {
        nombre,
        partidoId: partido,
        ciudad_municipio: ciudad,
      });
      if (response.status === 201) {
        alert("Candidato creado correctamente");
        setNombre("");
        setPartido("");
        setCiudad("");
        navigate("/candidatos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Crear candidato</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nombre Candidato
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="partido" className="form-label">
              Partido
            </label>
            <select
              className="form-control"
              id="partido"
              value={partido}
              onChange={(e) => setPartido(e.target.value)}
            >
              <option value="">Selecciona un partido</option>
              {partidos.map((partido) => (
                <option key={partido.id} value={partido.id}>
                  {partido.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Ciudad/Municipio:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              onChange={(e) => setCiudad(e.target.value)}
            />
          </div>
          <Button
            variant="primary"
            className="buttonNote"
            onClick={handleCreateCandidato}
          >
            Create
          </Button>
          <Link to="/candidatos">
            <Button variant="danger" className="buttonNote">
              Cancel
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default CreateCandidato;
