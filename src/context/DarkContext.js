import { createContext } from 'react';
export const ThemeContext = createContext({
  theme: '',
  setTheme: (theme) => {},
});

// import React, { createContext, useContext, useState, useEffect } from 'react';
// export const UserContext = createContext();


// export const AuthProvider = ({ children }) => {
//     const [darkMode,setDarkMode] =  useState(false); 
//   return (
//     <UserContext.Provider value={{darkMode}}>{children}</UserContext.Provider>
//   );
// };

// export function useUserContext() {
//   return useContext(UserContext);
// }




