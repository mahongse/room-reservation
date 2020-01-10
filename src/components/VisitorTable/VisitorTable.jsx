import React from "react";
// import Spinner from "../Spinner";
import moment from "moment";

const VisitorTable = ({
  visitorData,
  deleteVisitor,
  setCurrentVisitor,
  loading
}) => {
  const handleDelete = id => {
    deleteVisitor(id);
  };

  const handleEdit = visitor => {
    setCurrentVisitor(visitor);
  };

  // if (loading) return <Spinner />;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Person Name</th>
          <th>Person ID</th>
          <th>Date</th>
          <th>Card Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {visitorData &&
          visitorData.map((visitor, index) => (
            <tr key={visitor.id}>
              <td>{index + 1}</td>
              <td>{visitor.personName}</td>
              <td>{visitor.personId}</td>
              <td>{moment(visitor.createdDate).format("MM/DD/YYYY")}</td>
              <td>{visitor.cardNumber}</td>
              <td onClick={() => handleEdit(visitor)}>
                <i className="fa fa-pencil-square-o"></i>
              </td>
              <td onClick={() => handleDelete(visitor.id)}>
                <i className="fa fa-times-circle-o"></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default VisitorTable;
