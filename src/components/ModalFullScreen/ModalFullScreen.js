import React from "react";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const ModalFullScreen = ({
  show,
  onClose,
  submit,
  submitLoading,
  modalText,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="container">
      <div
        className="modal-wrapper"
        style={{
          transform: show ? `translateY(0%)` : `translateY(-100%)`,
          opacity: show ? "1" : "0",
        }}
      >
        {submitLoading ? (
          <>
            <div className="text-center">
              <ClipLoader color="#FFD700" size={150} loading={submitLoading} />
              <div className="modalText"> {modalText}</div>
              
            </div>
          </>
        ) : (
          <div className="modal  animated animatedFadeInUp fadeInUp">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Title</h4>
                <span onClick={onClose} className="close-modal-btn">
                  X
                </span>
              </div>
              <div className="modal-body">
                <h4>Modal Content</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
                  unde dolores quidem asperiores sed incidunt debitis porro
                  totam corrupti, officia aspernatur qui sequi! Repellat aliquam
                  quae eum qui fugiat similique.
                </p>
                <div className="modal-body-content">
                  <form className="form">
                    <label for="fname">First Name</label>
                    <input
                      type="text"
                      placeholder="Your name here"
                      name="firstname"
                    />
                    <label for="lname">Last Name</label>
                    <input
                      type="text"
                      placeholder="Your name here"
                      name="lastname"
                    />
                    <label for="email">Email</label>
                    <input
                      type="text"
                      placeholder="Email Adress"
                      name="email"
                    />
                    <p className="text-muted">
                      We'll never share your email with anyone else.
                    </p>
                    <label for="country">Country</label>
                    <select id="country" name="country">
                      <option value="australia">Viet Nam</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                    </select>
                    <input
                      type="checkbox"
                      id="infor"
                      name="infor"
                      value="infor"
                    />
                    <label for="infor"> Check me out</label>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="buttonClose" onClick={onClose}>
                  {" "}
                  Close
                </button>
                <button className="buttonClose" onClick={submit}>
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalFullScreen;
