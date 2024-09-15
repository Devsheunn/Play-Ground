import { useState, useEffect, useContext } from "react";
import Table from "../Table/Table";
import "./InconvenienceAll.css";
import { assets } from "../../assets/assets";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import GetData from "../GetData";
import GetUserDetails from "../GetUserDetails";

const InconvenienceAll = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [toggleTabs, setToggleTabs] = useState(1);
  const [isMyAccoount, setIsMyAccount] = useState(true);
  const getUser = GetUserDetails();
  const getData = GetData();
  const [data, setData] = useState([]);
  const [deptRec, setDeptRec] = useState([]);

  const handleToggle = i => {
    setToggleTabs(i);
    if (i !== 1) {
      setIsMyAccount(false);
    } else {
      setIsMyAccount(true);
    }
  };

  const handleClick = url => {
    navigate(url);
  };

  const column1 = [
    {
      name: "Job ID",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "Job Description",
      selector: row => row.job_description,
    },
    {
      name: "Attendance",
      selector: row => row.attendance_status,
      conditionalCellStyles: [
        {
          when: row => row.attendance_status === "present",
          classNames: ["iscomplete", "status"],
        },
        {
          when: row => row.attendance_status === "pending",
          classNames: ["in-progress", "status"],
        },
        {
          when: row => row.attendance_status === "absent",
          classNames: ["declined", "status"],
        },
      ],
    },
    {
      name: "Date",
      selector: row => {
        const date = new Date(row.created_at);
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long", // You can use 'short' or 'numeric'
          day: "numeric",
        });
        return formattedDate;
      },
      sortable: true,
    },
  ];

  const column2 = [
    {
      name: "Request ID",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "Job Description",
      selector: row => row.description,
    },
    {
      name: "Attendance",
      selector: row => row.status,
      conditionalCellStyles: [
        {
          when: row => row.status === "submitted",
          classNames: ["iscomplete", "status"],
        },
        {
          when: row => row.status === "draft",
          classNames: ["in-progress", "status"],
        },
        {
          when: row => row.status === "absent",
          classNames: ["declined", "status"],
        },
      ],
    },
    {
      name: "Date",
      selector: row => {
        const date = new Date(row.created_at);
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long", // You can use 'short' or 'numeric'
          day: "numeric",
        });
        return formattedDate;
      },
      sortable: true,
    },
  ];

  useEffect(() => {
    getData("api/inconvenience-request-lines/own/", setData);
    getData("api/inconvenience-requests/", setDeptRec);
    getUser();
    console.log(deptRec);
    console.log(data);
  }, []);

  let stringifiedData1Array = data.map(obj => {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = String(obj[key]);
      }
    }
    return newObj;
  });

  let stringifiedData2Array = deptRec.map(obj => {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = String(obj[key]);
      }
    }
    return newObj;
  });

  return (
    <>
      <Header />
      <div className="inconvenience-allowance-container">
        <h1>INCONVENIENCE ALLOWANCE</h1>
        <div className="tabs">
          <div
            onClick={() => handleToggle(1)}
            className={toggleTabs === 1 ? "active tab" : "tab"}
          >
            My Account
          </div>
          <div
            onClick={() => handleToggle(2)}
            className={toggleTabs === 2 ? "active tab" : "tab"}
          >
            Department(s)
          </div>
        </div>

        <section className="main">
          {isMyAccoount ? (
            <div className="tab-1-content">
              <div className="personal-info-balance">
                <h2>Current Balance : #30,000.00</h2>
                <div className="personal-info">
                  <div className="profile-pic">
                    <img src={assets.myPic} alt="profile pic" />
                  </div>
                  <div className="name-email-department">
                    <h3>
                      {user?.last_name}, {user?.first_name}
                    </h3>
                    <h4>{user?.department_name}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>
              </div>
              <Table
                columns={column1}
                data={stringifiedData1Array}
                error={error}
              />
            </div>
          ) : (
            <div className="tab-2-content">
              <button
                onClick={() => handleClick("/inconvenience-allowance/form")}
              >
                New Request
              </button>
              <Table
                columns={column2}
                data={stringifiedData2Array}
                error={error}
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default InconvenienceAll;
