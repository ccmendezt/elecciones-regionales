import Partido from "../components/Partido";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PartidosP = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [partidos, setPartidos] = React.useState([]); // Estado inicial de las notas

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/partidopolitico`); //Agregar url a la variable de entorno
        setPartidos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container header">
        <h1 className="title">Partidos Politicos</h1>
        <p className="subtitle">
          <i>Creado por Cristian Camilo Méndez Trujillo</i>
        </p>
        <Link to="/createPartido">
          <div className="btnCreateNote mb-2">
            <button type="button" className="btn btn-primary">
              Crear Partido
            </button>
          </div>
        </Link>
        <Link to="/candidatos">
          <div className="btnCreateNote">
            <button type="button" className="btn btn-primary">
              Ir a Candidatos
            </button>
          </div>
        </Link>
      </div>

      <div className="container text-center contNotes">
        <Row md={4}>
          {partidos.map((partido) => (
            <Partido
              key={partido.id}
              id={partido.id}
              nombre={partido.nombre}
              mision={partido.mision}
              siglas={partido.siglas}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default PartidosP;
