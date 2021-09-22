import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { customerAction } from "../../redux/actions/customerAction";

const ModalFullScreen = ({ show, onClose }) => {
  const parentElement = useRef(null);
  const createCustomer = useSelector((state) => state.customer.createdCustomer);
  console.log("createCustomer", createCustomer);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(customerAction.createCustomer(formData));
    onClose();
  };

  useEffect(() => {
    if (createCustomer) {
      setFormData((formData) => ({
        ...formData,
        name: createCustomer.name,
        job: createCustomer.job,
      }));
    }
  }, []);
  const onClickBackdrop = (e) => {
    console.log(e.target, parentElement.current);
    const iscontained = parentElement.current.contains(e.target);
    const isNotParent = parentElement.current !== e.target;
    if (iscontained && isNotParent) {
      return;
    }
    onClose();
  };

  return (
    <div className="container " style={{ display: show ? "block" : "none" }}>
      <div className="modal-wrapper">
        <div
          className=" modal-modify animated  animatedFadeInUp fadeInUp"
          onClick={onClickBackdrop}
          ref={parentElement}
        >
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
                unde dolores quidem asperiores sed incidunt debitis porro totam
                corrupti, officia aspernatur qui sequi! Repellat aliquam quae
                eum qui fugiat similique.
              </p>
              <div className="modal-body-content">
                <form className="form" type="submit">
                  <label for="name"> Name</label>
                  <input
                    type="text"
                    placeholder="Your name here"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                  />
                  <label for="job">Job</label>
                  <input
                    type="text"
                    placeholder="Job"
                    name="job"
                    value={formData.job}
                    onChange={handleOnChange}
                  />
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button className="buttonClose" onClick={onClose}>
                {" "}
                Close
              </button>
              <button
                className="buttonClose"
                onClick={handleSubmit}
                type="submit"
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFullScreen;
