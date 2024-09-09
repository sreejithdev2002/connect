import React, { useState } from "react";
import "../Styles/global.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginApi } from "../Services/UserApi";

function Login() {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await LoginApi(values);
      if (data.status) {
        localStorage.setItem("jobportal-jwt", data.token);
        navigate("/");
      } else {
        console.log("Error occured");
      }
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Header />
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="loginInputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your registered email..."
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p
                className="error-message"
                style={{
                  fontSize: "12px",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="loginInputDiv">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p
                className="error-message"
                style={{
                  fontSize: "12px",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                {formik.errors.password}
              </p>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
        <p onClick={handleRegister}>Create a new Account</p>
      </div>
    </>
  );
}

export default Login;
