import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// import { useNavigate } from "react-router-dom";
// import api from "../Utils/axios";
// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setisLoading] = useState(true);

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");

//     if (accessToken) {
//       api
//         .get("api/users/own/")
//         .then(response => setUser(response.data))
//         .catch(async error => {
//           if (error.response?.status === 401) {
//             await refreshAccessToken();
//           } else {
//             setUser(null);
//             localStorage.removeItem("accessToken");
//           }
//         })
//         .finally(() => setisLoading(false));
//     } else {
//       setisLoading(false);
//     }
//   }, [user]);

//   const refreshAccessToken = async () => {
//     try {
//       const response = await api.post("api/users/token/refresh/");
//       const { accessToken } = response.localStorage.setItem(
//         "accessToken",
//         accessToken
//       );
//       setUser(
//         await api.get("api/users/own/").then(response => {
//           response.data;
//         })
//       );
//     } catch (error) {
//       setUser(null);
//       localStorage.removeItem("accessToken");
//     }
//   };

//   const login = async credentials => {
//     const response = await api.post("api/users/token/", credentials);
//     const { accessToken, user } = response.data;

//     localStorage.setItem("accessToken", accessToken);
//     setUser(user);
//   };

//   const logOut = () => {
//     localStorage.removeItem("accessToken");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logOut, isLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
