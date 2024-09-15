import "./InconvenienceAllPage.css";
import StatusBar from "../SrarusBar/StatusBar";
import InconvenienceAllForm from "../InconvenienceAllForm/InconvenienceAllForm";
import Search from "../Search/Search";
import FormContextProvider, { FormContext } from "../../Context/FormContext";
import Header from "../Header/Header";

const InconvenienceAllPage = () => {
  return (
    <>
      <Header />
      <div className="inconvenienceAllPage-container">
        <StatusBar />
        <InconvenienceAllForm />
        <Search />
      </div>
    </>
  );
};

export default InconvenienceAllPage;
