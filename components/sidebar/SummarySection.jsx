import React from "react";

const SummarySection = ({ summary, subtitle }) => {
  return (
    <div>
      <h2 className="h2 greyBlue">{summary}</h2>
      <p className="darkgray mb2">{subtitle}</p>
    </div>
  );
};

export default SummarySection;
