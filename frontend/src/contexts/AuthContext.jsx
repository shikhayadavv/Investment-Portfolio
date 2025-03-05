import { createContext, useEffect, useState } from "react";
import { loginUser } from "../utils/api";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser(jwtDecode(token));
        }
    }, []);

const login = async (credentials) => {
    try{
        const response = await loginUser(credentials);
        localStorage.setItem("token", response.data.token);
        setUser(jwtDecode(response.data.token));
    }
    catch(error){
        console.error("Login failed:", error.response.data.message);
    }
};

return(
    <AuthContext.Provider value={{user,login}}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthContext;