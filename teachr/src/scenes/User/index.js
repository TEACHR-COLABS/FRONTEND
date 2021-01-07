import React, { useState, useEffect } from 'react';
import axios from 'axios';

//State
import { useStateValue } from '../../state';

//Components
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../../components/Header';
import MarkingPage from "../MarkingPage/index"

//Custom Components
import { ColumnContainer } from '../../globals/components';

//Scenes


const UserAccount = ({ history }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [{ user, classes }, dispatch] = useStateValue();

    //Redirect to onboarding if profile is incomplete
    if (!user.profileComplete) {
        history.push('/onboarding');
    }

    useEffect(() => {
        setIsLoading(true);
        if (!classes || classes.length === 0) {
            let url = `http://localhost:8000/api/teachers/${user.id}`;
            axios
                .get(url)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error('did not fetch all users');
                    }
                    console.log(res);
                    dispatch({
                        type: 'set_user_classes',
                        payload: res.data.persons,
                    });
                    dispatch({
                        type: 'update_user',
                        payload: res.data.center,
                    });
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
        setIsLoading(false);
    }, []);

    return (
        <ColumnContainer>
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <Header
                        backButton
                        title={user.firstName}
                        subtitle={
                            <Link
                                to="/me/settings"
                                style={{ color: 'white', fontSize: '1.2em' }}
                            >
                                Settings
                            </Link>
                        }
                    />
                    <Switch>
                        <Route exact path="/me" component={MarkingPage} />
                        {/* <Route
                            path="/me/create-profile"
                            component={CreateProfile}
                        />
                        <Route
                            path="/me/edit-profile"
                            component={EditProfile}
                        />
                        <Route path="/me/settings" component={Settings} /> */}
                    </Switch>
                </>
            )}
        </ColumnContainer>
    );
};

export default UserAccount;
