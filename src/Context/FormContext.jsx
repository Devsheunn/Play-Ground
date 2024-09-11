import { createContext, useState, useEffect } from "react";
// import axios from "axios";
import useAxiosPrivate from "../Hooks/usePrivateAxios";

export const FormContext = createContext();
const FormContextProvider = props => {
  // Variables
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [selectionComplete, setSelectionComplete] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const url = "api/users/";
  const [data, setData] = useState([]);
  const [selectedEmployeesTemp, setSelectedEmployeesTemp] = useState([]);
  const [dateValue, setDateValue] = useState({});
  const [canProceed, setCanProceed] = useState(false);
  const api = useAxiosPrivate();
  const [formData, setFormData] = useState({ selected: [] });
  let arrayToPost = [];

  // Functions
  const handleOnDelete = dataId => {
    setSelectedEmployeesTemp(prev => prev.filter(item => item.id !== dataId));
  };

  const handleCreate = async e => {
    e.preventDefault();

    setFormData(prevState => ({
      ...prevState,
      selected: arrayToPost,
    }));

    try {
      const response = await api.post(`api/inconvenience-requests/`, {
        title: formData.title,
        description: formData.description,
      });

      console.log(response.data);
      const id = formData.selected[0].employee;
      console.log(id);

      const response2 = await api.post(
        `api/inconvenience-request-lines/${id}/`,
        {
          employee: formData.selected[0].employee,
          response: "pending",
          dates: formData.selected[0].dates,
        }
      );
      console.log(response2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async url => {
      try {
        const response = await api.get(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
        return [];
      }
    };

    getData(url);
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(data =>
        data.first_name.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  }, [data, userInput]);

  // Exported Values
  const FormContextValue = {
    searchBarActive,
    setSearchBarActive,
    selectedEmployeesTemp,
    setSelectedEmployeesTemp,
    filteredData,
    setFilteredData,
    data,
    setData,
    userInput,
    setUserInput,
    handleOnDelete,
    dateValue,
    setDateValue,
    selectionComplete,
    setSelectionComplete,
    canProceed,
    setCanProceed,
    handleCreate,
    formData,
    setFormData,
    arrayToPost,
  };

  return (
    <FormContext.Provider value={FormContextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
