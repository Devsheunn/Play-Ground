import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPreviewPage from "./Components/FormPreviewPage/FormPreviewPage";
import Header from "./Components/Header/Header";
import InconvenienceAllForm from "./Components/InconvenienceAllForm/InconvenienceAllForm";
import InconvenienceAllPage from "./Components/InconvenienceAllPage/InconvenienceAllPage";
import InconvenienceAll from "./Components/OvertimePage/InconvenienceAll";
import SearchResult from "./Components/SearchResult/SearchResult";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import StatusBar from "./Components/SrarusBar/StatusBar";
import Table from "./Components/Table/Table";
import toast, { Toaster } from "react-hot-toast";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { AuthProvider } from "./Context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/homePage",
    element: (
      <ProtectedRoutes>
        <HomePage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/inconvenience-allowance",
    element: (
      <ProtectedRoutes>
        <InconvenienceAll />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/inconvenience-allowance/form",
    element: (
      <ProtectedRoutes>
        <InconvenienceAllPage />
      </ProtectedRoutes>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <FormPreviewPage /> */}
    </AuthProvider>
  );
}

export default App;

// <Header />
{
  /* {test ? <InconvenienceAll /> : <InconvenienceAllForm />} */
}
{
  /* <StatusBar />  */
}
{
  /* <InconvenienceAllPage /> */
}
{
  /* <SettingsPage /> */
}
{
  /* <Table /> */
}
{
  /* <FormPreviewPage /> */
}
