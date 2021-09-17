import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const ModalFullScreen = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal title</h4>
          </div>
          <div className="modal-body">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, unde
            dolores quidem asperiores sed incidunt debitis porro totam corrupti,
            officia aspernatur qui sequi! Repellat aliquam quae eum qui fugiat
            similique.
          </div>
          <div className="modal-footer">
            <Button variant="success" className="button" onClick={onClose}>
              {" "}
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFullScreen;
