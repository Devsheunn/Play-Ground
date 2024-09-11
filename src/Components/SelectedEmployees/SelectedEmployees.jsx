import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./SelectedEmployees.css";
import { FormContext } from "../../Context/FormContext";

const SelectedEmployees = () => {
  const formatDates = datesArray => {
    return datesArray.map(date => {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      return formattedDate;
    });
  };
  const { selectedEmployeesTemp, selectionComplete, formData, arrayToPost } =
    useContext(FormContext);

  return (
    <div className="SelectedEmployees-container">
      {selectedEmployeesTemp.length > 0 && selectionComplete ? (
        <h1>Selected Employees</h1>
      ) : null}
      {selectedEmployeesTemp.length > 0 && selectionComplete
        ? selectedEmployeesTemp.map((item, i) => {
            arrayToPost[i] = {
              employee: item.id,
              response: "pending",
              dates: formatDates(item.dates),
            };
            console.log(formData);
            console.log(arrayToPost);
            return (
              <div key={item.id} className="employee-job-details">
                <p className="id">{item.staff_id}</p>
                <p className="name">
                  {item.first_name} {item.last_name}
                </p>
                <p className="dates">{item.dates.join(", ")}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SelectedEmployees;
