import useForm from "../../forms/useForm.js";
import User from "../models/User.js";
import PAGES from "../../routes/pageModel.js";
import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import { onChangePage } from "../../routes/router.js";
import {
  SIGNUP_FIRST_NAME_FIELD,
  SIGNUP_FIRST_NAME_ERROR,
  SIGNUP_LAST_NAME_FIELD,
  SIGNUP_LAST_NAME_ERROR,
  SIGNUP_STATE_FIELD,
  SIGNUP_STATE_ERROR,
  SIGNUP_COUNTRY_FIELD,
  SIGNUP_COUNTRY_ERROR,
  SIGNUP_CITY_FIELD,
  SIGNUP_CITY_ERROR,
  SIGNUP_STREET_FIELD,
  SIGNUP_STREET_ERROR,
  SIGNUP_HOUSE_NUMBER_FIELD,
  SIGNUP_HOUSE_NUMBER_ERROR,
  SIGNUP_ZIP_FIELD,
  SIGNUP_ZIP_ERROR,
  SIGNUP_PHONE_FIELD,
  SIGNUP_PHONE_ERROR,
  SIGNUP_EMAIL_FIELD,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_PASSWORD_FIELD,
  SIGNUP_PASSWORD_ERROR,
  SIGNUP_CANCEL_BTN,
  SIGNUP_SUBMIT_BTN,
} from "./../../services/domService.js";

console.log("testing");

export const signUp = () => {
  const SIGNUP_INPUTS_ARRAY = [
    SIGNUP_FIRST_NAME_FIELD,
    SIGNUP_LAST_NAME_FIELD,
    SIGNUP_STATE_FIELD,
    SIGNUP_COUNTRY_FIELD,
    SIGNUP_CITY_FIELD,
    SIGNUP_STREET_FIELD,
    SIGNUP_HOUSE_NUMBER_FIELD,
    SIGNUP_ZIP_FIELD,
    SIGNUP_PHONE_FIELD,
    SIGNUP_EMAIL_FIELD,
    SIGNUP_PASSWORD_FIELD,
  ];
  const SIGNUP_ERRORS_ARRAY = [
    SIGNUP_FIRST_NAME_ERROR,
    SIGNUP_LAST_NAME_ERROR,
    SIGNUP_STATE_ERROR,
    SIGNUP_COUNTRY_ERROR,
    SIGNUP_CITY_ERROR,
    SIGNUP_STREET_ERROR,
    SIGNUP_HOUSE_NUMBER_ERROR,
    SIGNUP_ZIP_ERROR,
    SIGNUP_PHONE_ERROR,
    SIGNUP_EMAIL_ERROR,
    SIGNUP_PASSWORD_ERROR,
  ];

  const INITIAL_SIGNUP_FORM = {
    firstName: "",
    lastName: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
  };

  const SIGNUP_SCHEMA = {
    firstName: ["min", 2],
    lastName: "string",
    state: "string",
    country: "string",
    city: "string",
    street: "string",
    houseNumber: "number",
    zip: "number",
    phone: "number",
    email: "email",
    password: "password",
  };

  const handleSignupSubmit = (data) => {
    console.log(data);
    const {
      firstName,
      lastName,
      state,
      country,
      city,
      street,
      houseNumber,
      zip,
      phone,
      email,
      password,
    } = data;
    data.address = { state, country, city, street, houseNumber, zip };
    data.name = (firstName, lastName);

    const newUser = new User(data);
    users.push(newUser);
  };

  //   try {
  //     data.user_id = "123456";
  //     const pic = new Picture(data, pictures);
  //     onReset(INPUTS_ARRAY, ERRORS_ARRAY,CREATE_PIC_SUBMIT_BTN, rest.handleReset);
  //     pictures.push(pic);
  //     onChangePage(PAGES.HOME);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const form = useForm(INITIAL_SIGNUP_FORM, SIGNUP_SCHEMA, handleSignupSubmit);

  SIGNUP_FIRST_NAME_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_FIRST_NAME_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_LAST_NAME_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_LAST_NAME_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_STATE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_STATE_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_COUNTRY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_COUNTRY_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_CITY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_CITY_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_STREET_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_STREET_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_HOUSE_NUMBER_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_HOUSE_NUMBER_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_ZIP_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ZIP_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_PHONE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_PHONE_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_EMAIL_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_PASSWORD_ERROR,
      SIGNUP_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });
  SIGNUP_CANCEL_BTN.addEventListener("click", form.handleReset);
  SIGNUP_SUBMIT_BTN.addEventListener("click", form.onSubmit);
};
// SIGNUP_FIRST_NAME_ERROR,
// SIGNUP_LAST_NAME_FIELD,
// SIGNUP_LAST_NAME_ERROR,
// SIGNUP_STATE_FIELD,
// SIGNUP_STATE_ERROR,
// SIGNUP_COUNTRY_FIELD,
// SIGNUP_COUNTRY_ERROR,
// SIGNUP_CITY_FIELD,
// SIGNUP_CITY_ERROR,
// SIGNUP_STREET_FIELD,
// SIGNUP_STREET_ERROR,
// SIGNUP_HOUSE_NUMBER_FIELD,
// SIGNUP_HOUSE_NUMBER_ERROR,
// SIGNUP_ZIP_FIELD,
// SIGNUP_ZIP_ERROR,
// SIGNUP_PHONE_FIELD,
// SIGNUP_PHONE_ERROR,
// SIGNUP_EMAIL_FIELD,
// SIGNUP_EMAIL_ERROR,
// SIGNUP_PASSWORD_FIELD,
// SIGNUP_PASSWORD_ERROR,
