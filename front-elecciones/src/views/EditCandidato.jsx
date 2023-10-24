import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const EditCandidato = () => {
  let navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [partidos, setPartidos] = useState([]);
  const [partidoP, setPartidoP] = useState("");
  const [ciudad, setCiudad] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/candidatos/${id}`); //Agregar url a la variable de entorno
        console.log(response.data);
        setNombre(response.data.nombre);
        setPartidoP(response.data.partido);
        setCiudad(response.data.ciudad_municipio);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPartidos = async () => {
      try {
        const response = await axios.get(`${apiUrl}/partidopolitico`);
        setPartidos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPartidos();
    fetchData();
  }, []);

  const handleChangeCandidato = async () => {
    try {
      console.log(partidoP);
      const response = await axios.patch(`${apiUrl}/candidatos/${id}`, {
        nombre: nombre,
        ciudad_municipio: ciudad,
        partidoId: +partidoP,
      });
      setNombre("");
      setCiudad("");
      setPartidoP("");
      setPartidos([]);
      if (response.status === 200) {
        alert("Candidato actualizado correctamente");
        navigate("/candidatos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre Candidato
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="partido" className="form-label">
            Partido:
          </label>
          <select
            className="form-control"
            id="partido"
            value={partidoP.id}
            onChange={(e) => setPartidoP(e.target.value)}
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
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Ciudad/Municipio:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            rows="3"
          ></textarea>
        </div>
        <Button
          variant="primary"
          className="buttonNote"
          onClick={handleChangeCandidato}
        >
          Save
        </Button>
        <Link to="/candidatos">
          <Button variant="danger" className="buttonNote">
            Cancel
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default EditCandidato;
