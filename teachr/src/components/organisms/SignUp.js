import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";
import { withState } from "../../state";
import styled from "styled-components";
import {
  Form as SemanticForm,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import * as Yup from "yup";
import axios from "axios";

const Stretch = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

const App = ({
  values,
  errors,
  touched,
  isSubmitting,
  status,
  handleSubmit,
}) => {
  console.log(isSubmitting);
  return (
    <SemanticForm as={Form} onSubmit={handleSubmit}>
      {isSubmitting && (
        <Dimmer page active>
          <Loader>Creating Account</Loader>
        </Dimmer>
      )}
      <Stretch>
        <div>
          <h2>Sign Up</h2>
          <strong>
            <p>First Name</p>
          </strong>
          <Field
            type="name"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
          />
        </div>
        <div>
          <strong>
            <p>Last Name</p>
          </strong>
          <Field
            type="name"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
          />
        </div>
        <div>
          <strong>
            <p>Email</p>
          </strong>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field
            type="email"
            name="email"
            placeholder="email@.com"
            value={values.email}
          />
        </div>

        <div>
          <strong>
            <p>Password</p>
          </strong>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            autoComplete="password"
          />
        </div>

        <div>
          <strong>
            <p>Confirm Password</p>
          </strong>
          {touched.passwordConfirm && errors.passwordConfirm && (
            <p>{errors.passwordConfirm}</p>
          )}
          <Field
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={values.passwordConfirm}
            autoComplete="Confirm password"
          />
        </div>

        <div>
          <strong>
            <p>Last Name</p>
          </strong>
          <Field
            type="name"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
          />
        </div>
        
      </Stretch>
      <SemanticForm.Button content="Sign Up" color="green" />
    </SemanticForm>
  );
};

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);

//Initial values, Handle validation, Submission
//HOC created to conect to our App component
const SignUp = withFormik({
  mapPropsToValues({ email, password, passwordConfirm }) {
    return {
      email: email || "",
      password: password || "",
      passwordConfirm: passwordConfirm || "",
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    passwordConfirm: Yup.string()
      .equalTo(Yup.ref("password"), "Passwords must match")
      .required("Required"),
  }),

  async handleSubmit(
    values,
    { props, resetForm, setStatus, setErrors, setSubmitting }
  ) {
    console.log(props);
    setSubmitting(true);
    axios
      .post("https://teachr-back-end.herokuapp.com/api/auth/register", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        window.localStorage.setItem("user", JSON.stringify(response.data));
        props.dispatch({
          type: "set_user",
          payload: response.data,
        });
        // props.history.push('/onboarding');
      })
      .catch((error) => {
        console.log(error.response);
      });

    setTimeout(() => {
      if (values.email === "oluwatolablessing@gmail.com") {
        setErrors({ email: "Email already in use" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  },
})(App);

export default withState(withRouter(SignUp));
