import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const EditPartido = () => {
  let navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [mision, setMision] = useState("");
  const [siglas, setSiglas] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/partidopolitico/${id}`); //Agregar url a la variable de entorno
        console.log(response.data);
        setNombre(response.data.nombre);
        setSiglas(response.data.siglas);
        setMision(response.data.mision);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChangeNote = async () => {
    try {
      const response = await axios.patch(`${apiUrl}/partidopolitico/${id}`, {
        nombre,
        siglas,
        mision,
      });
      setNombre("");
      setSiglas("");
      setMision("");
      if (response.status === 200) {
        alert("Partido actualizado correctamente");
        navigate("/");
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
            Nombre Partido
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
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Siglas
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            value={siglas}
            onChange={(e) => setSiglas(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Misión
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={mision}
            onChange={(e) => setMision(e.target.value)}
            rows="3"
          ></textarea>
        </div>
        <Button
          variant="primary"
          className="buttonNote"
          onClick={handleChangeNote}
        >
          Save
        </Button>
        <Link to="/">
          <Button variant="danger" className="buttonNote">
            Cancel
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default EditPartido;
