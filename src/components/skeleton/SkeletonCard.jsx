import BaseSkeleton from "./BaseSkeleton";
import SkeletonImage from "./Skeletonimage";

const SkeletonCard = () => {
  return (
    <div className="card">
      <div className="images">
        <SkeletonImage dimension={{ width: 426, height: 241 }} />
      </div>
      <BaseSkeleton type="text" />
      <BaseSkeleton type="text" />
    </div>
  );
};

export default SkeletonCard;
