// import "./InconvenienceAllForm.css";
import { assets } from "../../assets/assets";
import SelectedEmployees from "../SelectedEmployees/SelectedEmployees";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../Context/FormContext";
import Header from "../Header/Header";
import StatusBar from "../SrarusBar/StatusBar";
import Search from "../Search/Search";
import { useParams } from "react-router-dom";
import GetData from "../GetData";

const EditandDraft = () => {
  const [datatoEdit, setDatatoEdit] = useState({});
  const {
    setSearchBarActive,
    selectionComplete,
    selectedEmployeesTemp,
    formData,
    setFormData,
    handleCreate,
    preview,
    isLoading,
  } = useContext(FormContext);

  const handleAddEmployees = e => {
    e.preventDefault();
    setSearchBarActive(true);
  };

  const handlechange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const param = useParams();

  console.log(param);

  const getData = GetData();

  useEffect(() => {
    getData(`api/inconvenience-requests/${param.id}/`, setDatatoEdit);
  }, []);

  console.log(datatoEdit.title);

  return (
    <>
      <Header />
      <div className="inconvenienceAllPage-container">
        <StatusBar />
        {preview ? (
          <div className="allowance-form">
            <div className="form-container">
              <h1>Inconvenience Allowance Form</h1>
              <div className="form-main">
                <div className="current">
                  <img src={assets.formIcon} alt="" />
                  <h2>Preview</h2>
                </div>
                <form action="/">
                  <label htmlFor="title">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={datatoEdit?.title}
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
                    value={datatoEdit?.description}
                    required
                    onChange={e => {
                      handlechange(e);
                    }}
                  ></textarea>

                  <SelectedEmployees />

                  <div className="btns">
                    <button
                      className="btn"
                      type="add"
                      onClick={handleAddEmployees}
                    >
                      Edit
                    </button>

                    <br />

                    <button
                      className="btn"
                      // type="submit"
                      onClick={e => {
                        handleCreate(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="allowance-form">
            <div className="form-container">
              <h1>Inconvenience Allowance Form</h1>
              <div className="form-main">
                <div className="current">
                  <img src={assets.formIcon} alt="" />
                  <h2>Edit Form</h2>
                </div>
                <form action="/">
                  <label htmlFor="title">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={datatoEdit?.title}
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
                    value={datatoEdit?.description}
                    required
                    onChange={e => {
                      handlechange(e);
                    }}
                  ></textarea>

                  <SelectedEmployees />

                  <div className="btns">
                    {/* {!selectionComplete ? (
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
                  )} */}

                    <br />

                    <button
                      className="btn"
                      // type="submit"
                      onClick={e => {
                        handleCreate(e);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <Search />
      </div>
    </>
  );
};

export default EditandDraft;
