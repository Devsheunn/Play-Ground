import "./InconvenienceAllForm.css";
import { assets } from "../../assets/assets";
import SelectedEmployees from "../SelectedEmployees/SelectedEmployees";
import { useContext } from "react";
import { FormContext } from "../../Context/FormContext";

const InconvenienceAllForm = () => {
  const {
    searchBarActive,
    setSearchBarActive,
    selectionComplete,
    selectedEmployeesTemp,
    setSelectionComplete,
    handleCreate,
    formData,
    setFormData,
    arrayToPost,
  } = useContext(FormContext);

  const handleAddEmployees = e => {
    e.preventDefault();
    setSearchBarActive(true);
  };

  const handlechange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="allowance-form">
        <div className="form-container">
          <h1>Inconvenience Allowance Form</h1>
          <div className="form-main">
            <div className="current">
              <img src={assets.formIcon} alt="" />
              <h2>Form</h2>
            </div>
            <form action="/">
              <label htmlFor="title">Job Title</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                onChange={e => {
                  handlechange(e);
                }}
              />
              <label htmlFor="description">Job Description</label>
              <textarea
                name="description"
                id="description"
                required
                onChange={e => {
                  handlechange(e);
                }}
              ></textarea>

              <SelectedEmployees />

              <div className="btns">
                {!selectionComplete ? (
                  <button
                    className="btn"
                    type="add"
                    onClick={handleAddEmployees}
                  >
                    Add Employees
                  </button>
                ) : (
                  <button
                    className="btn"
                    type="add"
                    onClick={handleAddEmployees}
                  >
                    Edit Selection
                  </button>
                )}

                <br />

                {selectionComplete && selectedEmployeesTemp.length > 0 ? (
                  <button
                    className="btn"
                    // type="submit"
                    onClick={e => {
                      handleCreate(e);
                    }}
                  >
                    Create
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InconvenienceAllForm;
