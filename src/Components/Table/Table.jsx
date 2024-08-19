import DataTable from "react-data-table-component";
import "./Table.css";

const customStyles = {
  rows: {
    style: {
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#f3f4f6",
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: "#f0f0f0",
      fontWeight: "700",
    },
  },
};

const Table = ({ columns, data, error }) => {
  return (
    <div className="table-container">
      {error ? (
        <div>NO DATA</div>
      ) : (
        <DataTable
          columns={columns}
          data={data.Overtime}
          pagination
          onRowDoubleClicked={row => {
            console.log(row.status);
          }}
          customStyles={customStyles}
        />
      )}
    </div>
  );
};

export default Table;
