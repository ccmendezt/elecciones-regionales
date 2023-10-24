import "./../styles/note.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import ModalDelete from "./ModalDelete";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import dayjs from "dayjs";

const Partido = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id, nombre, siglas, mision } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const estiloCard = {
    width: "19rem",
    minHeight: "14rem",
    height: "fit-content",
  };

  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/partidopolitico/${id}`);
      if (response.status === 200) {
        console.log("Note deleted successfully");
        navigate("/");
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
            <b>Siglas: </b>
            {siglas}
          </Card.Text>
          <Card.Text className="lastEdited">
            <b>Mision:</b> {mision}
          </Card.Text>
          <Card.Body>
            <div className="containerButtonsCard">
              <Link to={`/editPartido/${id}`}>
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
          handleDelete={handleDeleteNote}
        />
      </Card>
    </Col>
  );
};

export default Partido;
