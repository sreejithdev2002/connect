import React, { useState } from "react";
import "../Styles/global.css";
import Header from "../Components/Header";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { RegisterApi } from "../Services/UserApi";

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const onSubmit = async (values) => {
    console.log("Registered values : " + values);

    const { data } = await RegisterApi(values);
    navigate("/login");
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
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="loginInputDiv">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <p
                className="error-message"
                style={{
                  fontSize: "12px",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                {formik.errors.username}
              </p>
            )}
          </div>
          <div className="loginInputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
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
          <div className="loginInputDiv">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter your password again..."
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p
                  className="error-message"
                  style={{
                    fontSize: "12px",
                    color: "red",
                    textDecoration: "none",
                  }}
                >
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>
          <button type="submit">Register Account</button>
        </form>
        <p onClick={handleLogin}>Already have an Account</p>
      </div>
    </>
  );
}

export default Register;
