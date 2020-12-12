import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

//Components
import { Grid, Divider, Segment } from 'semantic-ui-react';

//Custom Components
import LogIn from '../../components/organisms/LogIn';
import SignUp from '../../components/organisms/SignUp';
import Header from "../../components/Header"

//Styled Components
import { ColumnContainer } from '../../globals/components';
// import { small } from '../../globals/styles';
// import { flexBoxMixin } from '../../globals/components';
import {Center} from '../../globals/components.js';

const FormContainer = styled(Segment)`
    width: 800px;
    padding: 10px;
`;

const LoginSignup = () => {
    return (
        <Center>
            <LogIn />
        </Center>
        /*<ColumnContainer>
            <Header
                justify="center"
                size="3em"
            />
            <LogIn />
            <ColumnContainer align="center">
                <FormContainer basic>
                    <Grid columns={2} relaxed="very" stackable>
                        <Grid.Column>
                            <LogIn />
                        </Grid.Column>
                        <Grid.Column>
                            <SignUp />
                        </Grid.Column>
                    </Grid>

                    <Divider vertical>Or</Divider>
                </FormContainer>
            </ColumnContainer>
        </ColumnContainer>*/
    );
};

export default LoginSignup;
