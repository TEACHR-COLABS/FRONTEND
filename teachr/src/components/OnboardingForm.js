import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../hooks';
import styled from 'styled-components';
import { Form as SemanticForm } from 'semantic-ui-react';
import { medium } from '../globals/styles';
import { withRouter } from 'react-router-dom';
import { withState } from '../state';

//Styled components
const StyledForm = styled.div`
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;
    width: 400px;

    div {
        margin-bottom: ${medium};
    }

    p {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

//Defining my hooks
const App = ({
    values,
    errors,
    effect,
    touched,
    status,
    handleSubmit,
    isSubmitting,
}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (effect) {
            setUsers([...users, effect]);
        }
    }, [effect, users]);

    return (
        //Profile onboarding adn styling
        <SemanticForm as={Form} onSubmit={handleSubmit}>
            <StyledForm>
        <div>
          <h2>
            <strong>Assessment Type</strong>
          </h2>
          <Field component="select" name="selectOption">
            <option>Select Assessment</option>
            <option value="RTD">Round Table Discussion</option>
            <option value="FD">French Discussion</option>
            <option value="AddNew">Add an Assessment</option>
          </Field>
        </div>

        <div>
          <h2>
            <strong>Group</strong>
          </h2>
          <Field component="select" name="selectGroup">
            <option>Select Group</option>
            <option value="ELEVEN">Grade 11 English; Group 1</option>
            <option value="EIGHT">Grade 8 French; Group 2</option>
            <option value="FULLCLASS">Full Class</option>
            <option value="ADD A">Add a Group</option>
          </Field>
        </div>
        <SemanticForm.Button type="submit" color="green">
          Begin Assessment
        </SemanticForm.Button>
      </StyledForm>
        </SemanticForm>
    );
};

const OnboardingForm = withFormik({
    mapPropsToValues({ selectOption, selectGroup }) {
        return {
            selectGroup: selectGroup || '',
            selectOption: selectOption || '',
        };
    },

    validationSchema: Yup.object().shape({
        selectOption: Yup.string().required('Assessment type is required'),
        selectGroup: Yup.string().required('Assessment group is required'),
    }),

    handleSubmit(values, { props, setEffect }) {
        console.log('Submitting Onboarding Form');
        console.log(props);
        axiosWithAuth()
            .put('/profile', {
                assessmentType: values.selectOption,
                assessmentGroup: values.selectGroup
            })
            .then(response => {
                props.dispatch({
                    type: 'update_user',
                    payload: response.data,
                });
                props.history.push('/me');
            })
            .catch(error => {
                console.log(error.response);
            });
    },
})(App);

export default withState(withRouter(OnboardingForm));
