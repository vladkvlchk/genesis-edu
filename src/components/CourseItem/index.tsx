import React from "react";
import { Link } from "react-router-dom";

import styles from "./CourseItem.module.scss";
import starUrlFilled from "../../accepts/star_filled.svg";
import starUrlHalf from "../../accepts/star_half.svg";
import starUrlEmpty from "../../accepts/star_empty.svg";
import { CourseItemType } from "./types";
import Video from "../Video";

const CourseItem: React.FC<CourseItemType> = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  rating,
  skills,
  description,
  videoPreviewUrl
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  // const testUrl = 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
  return (
    <div className={styles.item} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      <Link className={styles.link} to={`courses/${id}`}>
        <picture className={styles.imageContainer}>
          {isHovered ? (
            <Video src={videoPreviewUrl} muted={true} controls={false}/>
          ) : (
            <img
              src={previewImageLink + "/cover.webp"}
              className={styles.mainPhoto}
              alt="[course]"
            />
          )}
        </picture>
        <div className={styles.about}>
          <h5>{title}</h5>
          <p>
            {skills ? (
              <ul>
                {skills.map((skill) => {
                  return <li>&#10003; {skill}</li>;
                })}
              </ul>
            ) : (
              description
            )}
          </p>
          <div>
            <div className={styles.line}></div>
            <div className={styles.underLine}>
              <div className={styles.lessonsCount}>
                {lessonsCount} lesson{lessonsCount === 1 ? "" : "s"}
              </div>
              <ul className={styles.ratingContainer}>
                {[...new Array(Math.round(rating - 0.5))].map(() => {
                  return (
                    <li className={styles.ratingStar}>
                      <img src={starUrlFilled} alt="star" />
                    </li>
                  );
                })}
                {rating % 1 >= 0.5 ? (
                  <li className={styles.ratingStar}>
                    <img src={starUrlHalf} alt="star" />
                    <img
                      className={styles.left6px}
                      src={starUrlEmpty}
                      alt="star"
                    />
                  </li>
                ) : (
                  <></>
                )}
                {[...new Array(Math.round(4.95 - rating))].map(() => {
                  return (
                    <li className={styles.ratingStar}>
                      <img src={starUrlEmpty} alt="star" />
                    </li>
                  );
                })}
                <li className={styles.numeral}>{`[${rating}]`}</li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;
