import PropTypes from 'prop-types';
import "./BaseSkeleton.scss"

const BaseSkeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

BaseSkeleton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BaseSkeleton;