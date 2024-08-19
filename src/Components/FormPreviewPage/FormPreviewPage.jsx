import React from "react";
import "./FormPreviewPage.css";
import { assets } from "../../assets/assets";
import StatusBar from "../SrarusBar/StatusBar";
import SelectedEmployees from "../SelectedEmployees/SelectedEmployees";
import FormContextProvider, { FormContext } from "../../Context/FormContext";

const FormPreviewPage = () => {
  return (
    <FormContextProvider>
      <div className="form-preview-container">
        <StatusBar />
        <div className="details">
          <h1>Form Preview</h1>
          <div className="preview-main">
            <div className="current">
              <img src={assets.formIcon} alt="" />
              <h2>Preview</h2>
            </div>
            <div className="preview-job-info">
              <p className="department">Electrical Electronics Department</p>
              <h1 className="preview-title">
                Repair Of BFP A and Servicing Of BFP b
              </h1>
              <p className="preview-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti tempora magni inventore, officia reprehenderit adipisci
                ab corporis temporibus numquam labore.
              </p>
              {/* <p className="weekend-holiday">Week End</p> */}
              <div className="extra-details">
                <p className="it">Status: Pending</p>
                <p className="it">Created: August 14 2024</p>
                <p className="it">Created By: Engr Saliu Kakabori Johnson </p>
              </div>
            </div>

            <SelectedEmployees />

            <div className="btns">
              <button className="btn">Edit</button>
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </FormContextProvider>
  );
};

export default FormPreviewPage;
