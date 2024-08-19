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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/inconvenience-allowance",
    element: <InconvenienceAll />,
  },
  {
    path: "/inconvenience-allowance/form",
    element: <InconvenienceAllPage />,
  },
]);

function App() {
  // return <RouterProvider router={router} />;
  // return <FormPreviewPage />;
  return <SettingsPage />;
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
