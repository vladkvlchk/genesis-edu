import styles from "./About.module.scss";

import starUrlFilled from "../../../accepts/star_filled.svg";
import starUrlHalf from "../../../accepts/star_half.svg";
import starUrlEmpty from "../../../accepts/star_empty.svg";
import Video from "../../../components/Video";
import { AboutType } from "./types";

const About: React.FC<AboutType> = ({title, tags, launchDate, videoLink, description, rating, skills, previewImageLink}) => {
    // const testUrl = 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
    return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <i className={styles.tags}>{tags?.map((t) => "#" + t).join(", ") || "#no_tags"}</i>
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
      <p>launch date: <strong>{launchDate}</strong></p>
      <div className={styles.player}>
        <Video url={videoLink} preview={`${previewImageLink}/lesson-1.webp`}/>
      </div>

      <strong className={styles.description}>DESCRIPTION:</strong>
      <p>{description}</p>
      <strong className={styles.skills}>SKILLS:</strong>
      {skills.map(skill => {
        return (<li key={skill}>{skill}</li>)
      })}
    </div>
  );
};

export default About;
