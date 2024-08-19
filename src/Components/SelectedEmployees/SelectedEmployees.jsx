import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./SelectedEmployees.css";
import { FormContext } from "../../Context/FormContext";

const SelectedEmployees = () => {
  const { selectedEmployeesTemp, selectionComplete } = useContext(FormContext);
  return (
    <div className="SelectedEmployees-container">
      {selectedEmployeesTemp.length && selectionComplete > 0 ? (
        <h1>Selected Employees</h1>
      ) : null}
      {selectedEmployeesTemp.length && selectionComplete > 0
        ? selectedEmployeesTemp.map(item => (
            <div key={item.id} className="employee-job-details">
              <p className="id">{item.phone}</p>
              <p className="name"> {item.name} </p>
              <p className="dates">{item.dates.join(", ")}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default SelectedEmployees;
