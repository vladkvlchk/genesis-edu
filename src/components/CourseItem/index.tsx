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
}) => {
  return (
    <div className={styles.item}>
      <Link to={`courses/${id}`}>
        <img src={previewImageLink + '/cover.webp'} className={styles.mainPhoto} alt="[course]" />
        <div className={styles.about}>
          <h3>{title}</h3>
          <p className={styles.lessonsAmount}>lessons: <b>{lessonsCount}</b></p>
          <p className={styles.rating}>
            {rating}{" "}
            <img
              src={
                rating >= 1
                  ? starUrlFilled
                  : rating === 0.5
                  ? starUrlHalf
                  : starUrlEmpty
              }
              alt="star"
            />
            <img
              src={
                rating >= 2
                  ? starUrlFilled
                  : rating >= 1.5
                  ? starUrlHalf
                  : starUrlEmpty
              }
              alt="star"
            />
            <img
              src={
                rating >= 3
                  ? starUrlFilled
                  : rating >= 2.5
                  ? starUrlHalf
                  : starUrlEmpty
              }
              alt="star"
            />
            <img
              src={
                rating >= 4
                  ? starUrlFilled
                  : rating >= 3.5
                  ? starUrlHalf
                  : starUrlEmpty
              }
              alt="star"
            />
            <img
              src={
                rating === 5
                  ? starUrlFilled
                  : rating >= 4.5
                  ? starUrlHalf
                  : starUrlEmpty
              }
              alt="star"
            />
          </p>
          {skills && <p className={styles.pCenter}>Skills: </p>}
          {skills?.map((skill) => {
            return (
              <div key={skill} className={styles.skill}>
                <img src={skillUrl} alt="skill" height={'180px'}/>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;

