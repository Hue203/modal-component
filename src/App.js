import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalFullScreen from "./components/ModalFullScreen/ModalFullScreen";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="App">
        <Button
          onClick={() => setShowModal(true)}
          variant="success"
          style={{
            margin: 30,
            textAlign: "center",
          }}
        >
          Open Modal FullScreen
        </Button>
        <ModalFullScreen show={showModal} onClose={() => setShowModal(false)} />
      </div>
    </>
  );
}

export default App;
