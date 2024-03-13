import BaseSkeleton from "./BaseSkeleton";
import React from "react";
import PropTypes from "prop-types";

const SkeletonArticle = ({ numberOfLines }) => {
  const lines = Array.from({ length: numberOfLines });

  return (
    <div>
      <BaseSkeleton type="title" />
      {lines.map((_, index) => (
        <React.Fragment key={index}>
          <BaseSkeleton type="text" />
        </React.Fragment>
      ))}
    </div>
  );
};

SkeletonArticle.propTypes = {
  numberOfLines: PropTypes.number.isRequired,
};

export default SkeletonArticle;
