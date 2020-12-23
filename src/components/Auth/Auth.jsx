import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../reducers/authAction';

const Auth = () => {
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleAddAuth = (person) => {
        dispatch(authAction(person));
    }
    return (
        <div>
            <button onClick={handleAddAuth} className="btn btn-info">
                {auth.isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default Auth;