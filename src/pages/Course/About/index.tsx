import styles from "./About.module.scss";

import starUrlFilled from "../../../accepts/star_filled.svg";
import starUrlHalf from "../../../accepts/star_half.svg";
import starUrlEmpty from "../../../accepts/star_empty.svg";
import Video from "../../../components/Video";
import { AboutType } from "./types";

const About: React.FC<AboutType> = ({title, tags, launchDate, videoLink, description, rating, skills, previewImageLink}) => {
    //const testUrl = 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
    return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <i className={styles.tags}>{tags?.map((t) => "#" + t).join(", ") || "#no_tags"}</i>
      <p className={styles.rating}>{String(rating)}{" "}
        <img src={ rating >= 1 ? starUrlFilled : rating === 0.5 ? starUrlHalf : starUrlEmpty} alt="star" />
        <img src={ rating >= 2 ? starUrlFilled : rating >= 1.5 ? starUrlHalf : starUrlEmpty} alt="star" />
        <img src={ rating >= 3 ? starUrlFilled : rating >= 2.5 ? starUrlHalf : starUrlEmpty} alt="star" />
        <img src={ rating >= 4 ? starUrlFilled : rating >= 3.5 ? starUrlHalf : starUrlEmpty} alt="star" />
        <img src={ rating === 5 ? starUrlFilled : rating >= 4.5 ? starUrlHalf : starUrlEmpty} alt="star" />
      </p>
      <p>launch date: <strong>{launchDate}</strong></p>
      <div className={styles.player}>
        <Video url={videoLink} preview={previewImageLink + '/' + 'lesson-1' + '.webp'}/>  
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
