/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import styled from 'styled-components';
import { Form as SemanticForm, Dimmer, Loader } from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { ComponentWithState, withState } from '../../state';


const Stretch = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    /*height: 100vh;*/
    top:0;
    background:#83C5BE;
    color:#fbfbfb;
    font-family: 'Montserrat', sans-serif;
    margin: 10px 0 10px 0 ;
    p {
        /*margin: 10px;*/
        font-size: 20px;
        font-weight: 400;
    }

    a {
        color:#fbfbfb;
        text-decoration: underline;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 700;
        margin-bottom:10px;
    }

    .input{
        height: 44px;
        width: 300px;
        border-radius: 10px;
        border-style:none;
        background: #fbfbfb;
    }

    .button{
        background: #DC8744;
        color:#fbfbfb;
        border-style: none;
        border-radius: 100px;
        height: 40px;
        width:230px;
        margin: 10px 0 0px 0;
        box-shadow: 0px 4px 4px 0px rgba(0,0,0, 0.25);
    }

    .button:hover{
        background: #b06225;
        color:#fbfbfb;
    }

    img{
        height:153px;
        width:153px;
        margin-bottom:20px;
    }
`;

const Login = ({
    values,
    errors,
    touched,
    status,
    handleSubmit,
    isSubmitting,
}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status, users]);
    return (
        <SemanticForm as={Form} onSubmit={handleSubmit}>
            {isSubmitting && (
                <Dimmer active page>
                    <Loader>Logging In</Loader>
                </Dimmer>
            )}
            {errors.global && <p>{errors.global}</p>}
            <Stretch>
                <img src={process.env.PUBLIC_URL + "/logoteachr.png"}/>
                <div>
                        <h3>Email</h3>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={values.email}
                        style={{
                            width:'300px',
                            borderStyle:'none',
                            borderRadius:'10px',
                            background:'rgb(251, 251, 251)',
                            marginBottom:'30px'
                        }}
                    />
                </div>

                <div>
                        <h3>Password</h3>
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                    <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={values.password}
                        autoComplete="password"
                        style={{
                            width:'300px',
                            borderStyle:'none',
                            borderRadius:'10px',
                            background:'rgb(251, 251, 251)',
                            marginBottom:'30px'
                        }}
                    />
                </div>

            <SemanticForm.Button
                content="Sign in"
                id="button"
                style={{ }}
            />
            <p><a href="#">No account? Sign up here</a></p>
        </Stretch>
        </SemanticForm>
    );
};

//Initial values, Handle validation, Submission
//HOC created to conect to our App component
const LogIn = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(8)
            .required(),
    }),

    handleSubmit(
        values,
        { props, resetForm, setStatus, setErrors, setSubmitting }
    ) {
        setSubmitting(true);
        console.log(props);
        axios
            .post(
                'http://localhost:8000/api/auth/login',
                // 'https://teachr-back-end.herokuapp.com/api/auth/login',
                { email: values.email, password: values.password }
            )
            .then(response => {
                if (response.status === 200) {
                    window.localStorage.setItem(
                        'user',
                        JSON.stringify(response.data)
                    );
                    props.dispatch({
                        type: 'set_user',
                        payload: response.data,
                    });
                    props.history.push('/me');
                }
            })
            .catch(error => {
                setErrors({
                    global:
                        'Either your username or password was incorrect or you need to create an account. Please try again',
                });
                console.log(error);
                setSubmitting(false);
            });
        console.log(values);
    },
})(Login);

export default withState(withRouter(LogIn));
