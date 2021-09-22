import * as types from "../contantstan/customer";
import api from "../api";
import { toast } from "react-toastify";
const getCustomerList =
  (pageNum = 1) =>
  async (dispacth) => {
    dispacth({ type: types.GET_CUSTOMERS_REQUEST, payload: null });
    try {
      const res = await api.get(`/users?page=${pageNum}`);
      console.log("res", res.data.data);
      dispacth({ type: types.GET_CUSTOMERS_SUCCESS, payload: res.data.data });
    } catch (error) {
      console.log("err", error);
      dispacth({ type: types.GET_CUSTOMERS_FAILURE, payload: null });
    }
  };

const createCustomer = (formData) => async (dispacth) => {
  dispacth({ type: types.CREATE_CUSTOMERS_REQUEST, payload: null });
  try {
    const res = await api.post(`/users`, formData);
    console.log("addUserSuccess", res);
    // const res = await fetch("https://reqres.in/api", {
    //   method: "post",
    //   headers: new Headers({
    //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
    //     "Content-Type": "application/json",
    //   }),
    //   body: JSON.stringify({ formData }),
    // });
    dispacth({
      type: types.CREATE_CUSTOMERS_SUCCESS,
      payload: res.data,
    });
    toast.success("New user has been created!");
    dispacth(customerAction.getCustomerList());
  } catch (error) {
    console.log("err", error);
    dispacth({ type: types.CREATE_CUSTOMERS_FAILURE, payload: error });
  }
};

export const customerAction = { getCustomerList, createCustomer };
