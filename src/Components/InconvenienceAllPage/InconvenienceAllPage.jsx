import "./InconvenienceAllPage.css";
import StatusBar from "../SrarusBar/StatusBar";
import InconvenienceAllForm from "../InconvenienceAllForm/InconvenienceAllForm";
import Search from "../Search/Search";
import FormContextProvider from "../../Context/FormContext";
import Header from "../Header/Header";

const InconvenienceAllPage = () => {
  return (
    <>
      <Header />
      <div className="inconvenienceAllPage-container">
        <FormContextProvider>
          <StatusBar />
          <InconvenienceAllForm />
          <Search />
        </FormContextProvider>
      </div>
    </>
  );
};

export default InconvenienceAllPage;
