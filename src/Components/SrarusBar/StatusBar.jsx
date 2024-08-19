import { assets } from "../../assets/assets";
import "./StatusBar.css";

const StatusBar = () => {
  const stages = [
    { id: 1, name: "Team Lead", type: "Form", approved: true },
    { id: 2, name: "Team Lead", type: "Overview", approved: true },
    { id: 3, name: "HOD 1", type: "Approval", approved: true },
    { id: 4, name: "HOD 2", type: "Approval", approved: false },
  ];

  const handleIcon = stage => {
    if (stage.type === "Form") {
      return assets.formIconGray;
    } else {
      const icon =
        stage.type === "Overview" ? assets.overview : assets.approval;
      return icon;
    }
  };
  return (
    <>
      <div className="stages">
        {stages.map(stage => (
          <div
            key={stage.id}
            className={stage.approved ? "stage approved" : "stage"}
          >
            <div className="progress-dot"></div>
            <div className="info">
              <p>{stage.name}</p>
              <div className="type">
                <img src={handleIcon(stage)} alt="" />
                <p>{stage.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatusBar;
