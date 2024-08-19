import { useState, useEffect } from "react";
import Table from "../Table/Table";
import "./InconvenienceAll.css";
import { assets } from "../../assets/assets";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const InconvenienceAll = () => {
  const navigate = useNavigate();

  const [toggleTabs, setToggleTabs] = useState(1);
  const [isMyAccoount, setIsMyAccount] = useState(true);

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

  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "Department",
      selector: row => row.department,
    },
    {
      name: "Title",
      selector: row => row.title,
    },
    {
      name: "Status",
      selector: row => row.status,
      conditionalCellStyles: [
        {
          when: row => row.status === "complete",
          classNames: ["iscomplete", "status"],
        },
        {
          when: row => row.status === "in-progress",
          classNames: ["in-progress", "status"],
        },
        {
          when: row => row.status === "declined",
          classNames: ["declined", "status"],
        },
      ],
    },
    {
      name: "Date",
      selector: row => row.date,
      sortable: true,
    },
  ];

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/c/55e1-d949-4b30-ad36")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err));
  }, []);

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
                    <h3>Aina, Oluwatobiloba Seun</h3>
                    <h4>Electrical Electronics</h4>
                    <p>ainatobitobig@gmail.com</p>
                  </div>
                </div>
              </div>
              <Table columns={columns} data={data} error={error} />
            </div>
          ) : (
            <div className="tab-2-content">
              <button
                onClick={() => handleClick("/inconvenience-allowance/form")}
              >
                New Request
              </button>
              <Table columns={columns} data={data} error={error} />
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default InconvenienceAll;
