import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = (props: { isVisible: boolean }) => {
  return (
    <div
      className="loading-spinner"
      style={{ visibility: props.isVisible ? "visible" : "hidden" }}
    >
      <div className="loading loading--full-height"></div>
    </div>
  );
};

export default LoadingSpinner;
