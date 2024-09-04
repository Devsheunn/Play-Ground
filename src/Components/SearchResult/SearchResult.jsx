import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./SearchResult.css";
import { FormContext } from "../../Context/FormContext";
import toast from "react-hot-toast";

const SearchResult = () => {
  const {
    filteredData,
    setUserInput,
    setSelectedEmployeesTemp,
    selectedEmployeesTemp,
  } = useContext(FormContext);

  const alreadyAdded = () => {
    toast.error("Employee already added", {
      hideProgressBar: false,
    });
  };

  const handleOnSelect = data => {
    setUserInput("");
    // setSelectedEmployeesTemp(prev => {
    //   const exists = prev.some(item => item.id === data.id);
    //   if (exists) {
    //     handleNotification();
    //     console.log("twice");
    //     return prev;
    //   } else {
    //     const withDate = { ...data, dates: [] };
    //     return [...prev, withDate];
    //   }
    // });
    const exists = selectedEmployeesTemp.some(item1 => item1.id === data.id);
    if (exists) {
      setSelectedEmployeesTemp(prev => prev);
      alreadyAdded();
    } else {
      setSelectedEmployeesTemp(prev => {
        const withDate = { ...data, dates: [] };
        return [...prev, withDate];
      });
    }
    console.log(selectedEmployeesTemp);
  };

  return (
    <div className="search-result-container">
      {filteredData.length > 0 ? (
        filteredData.map(data => (
          <div
            key={data.id}
            className="searched-employee"
            onClick={() => {
              handleOnSelect(data);
            }}
          >
            <p>
              {" "}
              {data.first_name} {data.last_name}
            </p>
            <p>{data.staff_id}</p>
          </div>
        ))
      ) : (
        <div className="no-result">no data found</div>
      )}
    </div>
  );
};

export default SearchResult;
