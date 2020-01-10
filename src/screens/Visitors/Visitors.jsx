import React, { useEffect } from "react";
import VisitorForm from "../../components/VisitorForm";
import VisitorTable from "../../components/VisitorTable";
import PropTypes from "prop-types";
import { setCurrent, clearCurrent } from "../../actions";
import { connect } from "react-redux";
import {
  getVisitorsThunk,
  addVisitorThunk,
  deleteVisitorThunk,
  updateVisitorThunk
} from "../../thunk";

const Visitors = ({
  visitors,
  getVisitors,
  addVisitor,
  deleteVisitor,
  updateVisitor,
  setCurrentVisitor,
  clearCurrentVisitor
}) => {
  useEffect(() => {
    getVisitors();
    // eslint-disable-next-line
  }, []);

  const { visitorData, current, loading } = visitors;

  return (
    <div className="container">
      <div className="flex-grid">
        <div className="b-left">
          <VisitorForm
            current={current}
            addVisitor={addVisitor}
            updateVisitor={updateVisitor}
            clearCurrentVisitor={clearCurrentVisitor}
          />
        </div>
        <div className="right">
          <VisitorTable
            loading={loading}
            visitorData={visitorData}
            deleteVisitor={deleteVisitor}
            setCurrentVisitor={setCurrentVisitor}
          />
        </div>
      </div>
    </div>
  );
};

Visitors.propTypes = {
  visitors: PropTypes.object.isRequired,
  getVisitors: PropTypes.func.isRequired,
  addVisitor: PropTypes.func.isRequired,
  deleteVisitor: PropTypes.func.isRequired,
  updateVisitor: PropTypes.func.isRequired,
  setCurrentVisitor: PropTypes.func.isRequired,
  clearCurrentVisitor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visitors: state.visitors
});

const mapDispatchToProps = dispatch => ({
  getVisitors: () => {
    dispatch(getVisitorsThunk());
  },
  addVisitor: visitor => {
    dispatch(addVisitorThunk(visitor));
  },
  deleteVisitor: id => {
    dispatch(deleteVisitorThunk(id));
  },
  updateVisitor: visitor => {
    dispatch(updateVisitorThunk(visitor));
  },
  setCurrentVisitor: visitor => {
    dispatch(setCurrent(visitor));
  },
  clearCurrentVisitor: () => {
    dispatch(clearCurrent());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Visitors);
