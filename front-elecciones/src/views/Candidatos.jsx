import Candidato from "../components/Candidato";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Candidatos = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/candidatos`); //Agregar url a la variable de entorno
        setCandidatos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container header">
        <h1 className="title">Candidatos</h1>
        <p className="subtitle">
          <i>Creado por Cristian Camilo Méndez Trujillo</i>
        </p>
        <Link to="/createCandidato">
          <div className="btnCreateNote mb-2">
            <button type="button" className="btn btn-primary">
              Crear Candidato
            </button>
          </div>
        </Link>
        <Link to="/">
          <div className="btnCreateNote">
            <button type="button" className="btn btn-primary">
              Ir a Partidos Políticos
            </button>
          </div>
        </Link>
      </div>

      <div className="container text-center contNotes">
        <Row md={4}>
          {candidatos.map((candidato) => (
            <Candidato
              key={candidato.id}
              id={candidato.id}
              nombre={candidato.nombre}
              partido={candidato.partido.nombre}
              ciudad={candidato.ciudad_municipio}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Candidatos;
