import React, { createContext } from 'react';

const AuthContext = createContext({
    isLoggedin: false,
    test: "test"
});



export default AuthContext;


