import { createContext, useState } from "react";
import app from "./firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
// const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const AuthInfo = {
        loading,
        user,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;