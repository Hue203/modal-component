import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ModalFullScreen from "./components/ModalFullScreen/ModalFullScreen";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const handleSubmit = () => {
    setModalText(
      "Submitting Form ... The modal will be closed after two seconds"
    );
    setSubmitLoading(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitLoading(false);
    }, 2000);
  };
  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="container">
        <button className="buttonOpen" onClick={handleShow}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-alt-circle-down"
            className="svg-inline--fa fa-arrow-alt-circle-down fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"
            ></path>
          </svg>
          I'm Modal FullScreen
        </button>
        <ModalFullScreen
          show={showModal}
          onClose={() => setShowModal(false)}
          submit={handleSubmit}
          submitLoading={submitLoading}
          modalText={modalText}
        />
      </div>
    </>
  );
}

export default App;
