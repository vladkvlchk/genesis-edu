import React from "react";
import { Link } from "react-router-dom";

import styles from "./CourseItem.module.scss";
import skillUrl from "../../accepts/check_circle.svg";
import starUrlFilled from "../../accepts/star_filled.svg";
import starUrlHalf from "../../accepts/star_half.svg";
import starUrlEmpty from "../../accepts/star_empty.svg";
import { Course } from "./types";

const CourseItem: React.FC<Course> = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  rating,
  skills,
  description,
}) => {
  return (
    <div className={styles.item}>
      <Link className={styles.link} to={`courses/${id}`}>
        <picture className={styles.imageContainer}>
          <img
            src={previewImageLink + "/cover.webp"}
            className={styles.mainPhoto}
            alt="[course]"
          />
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
          {/* <p className={styles.lessonsAmount}>lessons: {lessonsCount}</p> */}
          {/* </p> */}
          {/* {skills && <p className={styles.pCenter}>Skills: </p>} */}
          {/* {skills?.map((skill) => {
            return (
              <div key={skill} className={styles.skill}>
                <img src={skillUrl} alt="skill" height={'180px'}/>
                <p>{skill}</p>
              </div>
            );
          })} */}
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;
