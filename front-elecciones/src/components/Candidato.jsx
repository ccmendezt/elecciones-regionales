import "./../styles/note.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import ModalDelete from "./ModalDelete";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import dayjs from "dayjs";

const Candidato = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id, nombre, partido, ciudad } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const estiloCard = {
    width: "19rem",
    minHeight: "14rem",
    height: "fit-content",
  };

  const handleDeleteCandidato = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/candidatos/${id}`);
      if (response.status === 200) {
        console.log("Candidate eliminado correctamente");
        navigate("/candidatos");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col>
      <Card border="secondary" style={estiloCard} className="card">
        <Card.Body>
          <Card.Title className="titleCard">{nombre}</Card.Title>
          <Card.Text className="contentCard">
            <b>Partido: </b>
            {partido}
          </Card.Text>
          <Card.Text className="lastEdited">
            <b>Ciudad/Municipio:</b> {ciudad}
          </Card.Text>
          <Card.Body>
            <div className="containerButtonsCard">
              <Link to={`/editCandidato/${id}`}>
                <Button variant="secondary" className="buttonNote">
                  Edit
                </Button>
              </Link>
              <Button
                variant="danger"
                className="buttonNote"
                onClick={handleShow}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card.Body>
        <ModalDelete
          show={show}
          handleClose={handleClose}
          handleDelete={handleDeleteCandidato}
        />
      </Card>
    </Col>
  );
};

export default Candidato;
