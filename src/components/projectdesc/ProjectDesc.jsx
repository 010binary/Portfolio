import { Portfolio1 } from "../Photos";
import "./ProjectDesc.scss";
import SkeletonArticle from "../skeleton/SkeletonArticle";
import SkeletonImage from "../skeleton/Skeletonimage";
import { useEffect, useState } from "react";
import BaseSkeleton from "../skeleton/BaseSkeleton";

const ProjectDesc = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingtext, setLoadingtext] = useState(true);
  // Simulating image loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingImages(false);
      setLoadingtext(false);
    }, 500);
    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="container project-desc">
      <h3>
        {loadingtext ? (
          <BaseSkeleton type="title" />
        ) : (
          <>
            <span className="blue-text">Project </span>
            Detail
          </>
        )}
      </h3>
      <section className="project-desc-img">
        {loadingImages ? (
          <SkeletonImage dimension={{ width: 1000, height: 400 }} />
        ) : (
          <img src={Portfolio1} alt="A picture about my project" />
        )}
      </section>
      <section className="project-desc-txt">
        {loadingtext ? (
          <SkeletonArticle numberOfLines={10} />
        ) : (
          <>
            <h6 className="project-desc-header">Project Story</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              quibusdam nobis quisquam a tempore quos assumenda necessitatibus
              labore sed accusantium tempora corporis molestiae, illum accusamus
              enim ad! Ipsa atque ex inventore magnam mollitia expedita ipsum
              hic est sint nulla cum, molestiae vel obcaecati architecto
              necessitatibus beatae dicta voluptatem nesciunt debitis
              laudantium. Iusto asperiores vero explicabo eius id illo. Hic
              vitae esse odit qui officia asperiores laboriosam velit porro
              nobis dolores. Totam nesciunt quibusdam mollitia repudiandae quae
              impedit dolor at incidunt, commodi magni tempora odio error
              sapiente neque, voluptatem minima voluptates porro nulla magnam
              tenetur officiis. Exercitationem ut recusandae suscipit sed enim
              voluptate, illo facere tempora cumque consectetur quisquam quasi
              officia, beatae nam? Explicabo commodi sunt neque debitis
              molestias quis blanditiis minima odio, quia excepturi rem
              molestiae voluptatibus nulla, deleniti ab doloremque sed earum
              veritatis incidunt. Tempore mollitia sit eaque officiis placeat
              soluta, corrupti voluptatum at iusto voluptatem beatae excepturi,
              qui ratione totam rem inventore natus odio, earum reiciendis
              porro. Temporibus modi exercitationem beatae est rem quis
              accusamus aliquid! Sint omnis dolor maxime itaque vero aspernatur
              dolores quas non voluptatum illum quaerat illo doloribus, unde
              explicabo officiis tempore autem numquam perferendis velit quo
              deleniti distinctio delectus facilis. Asperiores molestias
              accusamus dolorem.
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default ProjectDesc;
