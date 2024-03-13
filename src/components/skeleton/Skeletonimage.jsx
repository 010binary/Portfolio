import BaseSkeleton from "./BaseSkeleton";
import PropTypes from "prop-types";

{
  /* calling this component 
  <SkeletonImage dimension={{ width: 300, height: 200 }} /> */
}

const SkeletonImage = ({ dimension }) => {
  const { width, height } = dimension;
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
    >
      <BaseSkeleton type="image" />
    </div>
  );
};
SkeletonImage.propTypes = {
  dimension: PropTypes.object.isRequired,
};

export default SkeletonImage;
