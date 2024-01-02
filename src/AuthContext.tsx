import React, { createContext,useContext,useState, ReactNode } from 'react';

interface AuthContextProps { 
    isLoggedIn:boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children:ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> =  ({children}) => {
    const [isLoggedIn,setLoggedIn] = useState(() => {
        const storedValue = window.localStorage.getItem("isLoggedIn");
        return storedValue ? JSON.parse(storedValue) : false;
    });
    const login = () => {
        window.localStorage.setItem("isLoggedIn",JSON.stringify(true));
        setLoggedIn(true)
    };
    const logout = () => {
        window.localStorage.removeItem("isLoggedIn");
        setLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}