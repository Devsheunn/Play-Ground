import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FormContext = createContext();
const FormContextProvider = props => {
  // Variables
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [selectionComplete, setSelectionComplete] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [selectedEmployeesTemp, setSelectedEmployeesTemp] = useState([]);
  const [dateValue, setDateValue] = useState({});

  // Functions
  const handleOnDelete = dataId => {
    setSelectedEmployeesTemp(prev => prev.filter(item => item.id !== dataId));
  };

  useEffect(() => {
    const getData = async url => {
      try {
        const response = await axios.get(url);
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
        data.name.toLowerCase().includes(userInput.toLowerCase())
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
  };

  return (
    <FormContext.Provider value={FormContextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
