import styles from './Lesson.module.scss'

import Video from "../../../components/Video";
import { LessonType } from './types';

const Lesson: React.FC<LessonType> = ({link, order, previewImageLink, title}) => {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <div className={styles.player}>
        <Video url={link} preview={previewImageLink + '/' + order + '.webp'}/>  
      </div>
    </div>
  );
};

export default Lesson;
