import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customerAction } from "../../redux/actions/customerAction";
import ModalFullScreen from "../ModalFullScreen/ModalFullScreen";
import "./style.css";

const CustomerList = () => {
  const [showModal, setShowModal] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.customer.loading);
  const customers = useSelector((state) => state.customer.customer);
  const createCustomer = useSelector((state) => state.customer.createdCustomer);
  console.log("customer", customers);
  const dispatch = useDispatch();

  const handleOnclickAdd = () => {
    setShowModal(true);
  };

  console.log("setShowModal", showModal);
  useEffect(() => {
    dispatch(customerAction.getCustomerList(pageNum));
  }, [dispatch, pageNum]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {/* <div>{JSON.stringify(createCustomer, null, 2)}</div> */}
          <Container fluid>
            <Button variant="success" onClick={handleOnclickAdd}>
              ADD
            </Button>
            <Row className="table-users">
              <Col>
                <Table striped bordered hover className="cart-table">
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th
                        style={{ textAlign: "center" }}
                        className="mouse-hover"
                      >
                        Images
                      </th>
                      <th>Actions </th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    {customers &&
                      customers.map((item) => (
                        <tr style={{ textAlign: "center" }} key={item._id}>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.email}</td>
                          <td>
                            <img
                              src={item.avatar}
                              alt="user-avatar"
                              width="100px"
                              className="user-avatar"
                            />
                          </td>
                          <td className="action-btn">
                            <Button variant="outline-success">EDIT</Button>
                            <Button variant="outline-success">DELETE</Button>
                          </td>{" "}
                        </tr>
                      ))}
                  </tbody>{" "}
                </Table>
              </Col>
            </Row>

            <ModalFullScreen
              show={showModal}
              onClose={() => setShowModal(false)}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default CustomerList;
