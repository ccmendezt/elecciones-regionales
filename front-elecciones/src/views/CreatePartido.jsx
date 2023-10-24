import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function CreatePartido() {
  let navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [nombre, setNombre] = useState("");
  const [mision, setMision] = useState("");
  const [siglas, setSiglas] = useState("");

  const handleCreatePartido = async () => {
    try {
      const response = await axios.post(`${apiUrl}/partidopolitico`, {
        nombre,
        siglas,
        mision,
      });
      if (response.status === 201) {
        alert("Partido creado correctamente");
        setNombre("");
        setSiglas("");
        setMision("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Create note</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nombre Partido
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
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
              onChange={(e) => setMision(e.target.value)}
              rows="3"
            ></textarea>
          </div>
          <Button
            variant="primary"
            className="buttonNote"
            onClick={handleCreatePartido}
          >
            Create
          </Button>
          <Link to="/">
            <Button variant="danger" className="buttonNote">
              Cancel
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default CreatePartido;
