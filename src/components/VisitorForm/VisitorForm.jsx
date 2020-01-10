import React, { Fragment, useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { toast } from "react-toastify";

const VisitorForm = ({
  current,
  addVisitor,
  updateVisitor,
  clearCurrentVisitor
}) => {
  const visitorTemplate = {
    personName: "",
    personId: "",
    cardNumber: "",
    createdDate: ""
  };

  const [visitor, setVisitor] = useState(visitorTemplate);
  const { personName, personId, cardNumber, createdDate } = visitor;

  useEffect(() => {
    if (current) {
      setVisitor(current);
    }
  }, [current]);

  const handleSubmit = e => {
    e.preventDefault();

    if (visitor.id) {
      updateVisitor(visitor);
      clearCurrentVisitor();
      setVisitor(visitorTemplate);
      return;
    }
    if (personName === "" || personId === "" || cardNumber === "") {
      toast.error("Please fill in all fields");
    } else {
      const newVisitor = {
        personName,
        personId,
        cardNumber,
        createdDate
      };

      addVisitor(newVisitor);
      setVisitor(visitorTemplate);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setVisitor({
      ...visitor,
      [name]: value
    });
  };

  return (
    <Fragment>
      <h3>Add New Person</h3>
      <form onSubmit={handleSubmit}>
        <Input
          className="form-group"
          type="text"
          value={personName}
          name="personName"
          id="personName"
          title="Person Name"
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="number"
          value={personId}
          name="personId"
          id="personId"
          title="Person ID"
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="number"
          value={cardNumber}
          name="cardNumber"
          id="cardNumber"
          title="Card Number"
          onChange={handleChange}
        />
        <Input
          className="form-group"
          type="date"
          value={createdDate}
          name="createdDate"
          id="createdDate"
          title="Date"
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="btn"
          title={visitor.id ? "Update" : "Save"}
        />
      </form>
    </Fragment>
  );
};

export default VisitorForm;
