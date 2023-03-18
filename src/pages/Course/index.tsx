import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Course.module.scss";
import axios from "../../axios";
import About from "./About";
import Lesson from "./Lesson";
import { AboutType, LessonType } from "./types";
import Loader from "../../components/Loader";

const Course: React.FC = () => {
  const { courseId } = useParams();
  const [currentLessonId, setCurrentLessonId] = React.useState<string>(courseId);
  const [aboutCourse, setAboutCourse] = React.useState<AboutType>();
  const [lessons, setLessons] = React.useState<LessonType[]>();
  const firstLesson = { title: "About course", id: courseId, order: 0, status: 'unlocked'};
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(`/courses/${courseId}`);
      setLessons(data.lessons);
      setAboutCourse({
        id: data.id,
        title: data.title,
        tags: data.tags,
        launchDate: parseDate(data.launchDate),
        status: data.status,
        description: data.description,
        duration: data.duration,
        previewImageLink: data.previewImageLink,
        rating: data.rating,
        meta: data.meta,
      });
      setIsLoading(false);
    } catch (e) {
      console.warn(e);
    }
  };

  const parseDate = (str: string) => {
    const ms = Date.parse(str);
    const date = new Date(ms);

    let day = String(date.getDate());
    if (+day < 10) day = "0" + day;

    let month = String(date.getMonth() + 1);
    if (+month < 10) month = "0" + month;

    let year = String(date.getFullYear() % 100);
    if (+year < 10) year = "0" + year;

    let hours = String(date.getHours());
    if (+hours < 10) hours = "0" + hours;

    let mins = String(date.getMinutes());
    if (+mins < 10) mins = "0" + mins;
    return day + "." + month + "." + year + " " + hours + ":" + mins;
  };

  const onClickLesson = (id : string, status: string) => {
    if (status === "unlocked"){
        setCurrentLessonId(id)
    }
  }

  getData();

  if(isLoading){
    return <Loader />
  }

  return (
    <div className={styles.page}>
      <header>
        <Link to="../">
          <div className={styles.back}>{"< back"}</div>
        </Link>
      </header>
      <div className={styles.course}>
        <nav>
          <ul>
            {[firstLesson, ...lessons].map((lesson) => {
              return (
                <li
                  key={lesson.id}
                  className={`${currentLessonId === lesson.id ? styles.selected + " " : ""}${styles[lesson.status]}`}
                  onClick={() => onClickLesson(lesson.id, lesson.status)}
                >
                  {lesson.status === 'locked' ? "🔒" : ""}Lesson {String(lesson.order)}: {lesson.title}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.lesson}>
          {currentLessonId === courseId ? (
            <About
              title={aboutCourse?.title}
              tags={aboutCourse?.tags}
              launchDate={aboutCourse?.launchDate}
              videoLink={aboutCourse?.meta.courseVideoPreview.link}
              description={aboutCourse?.description}
              rating={aboutCourse.rating}
              skills={aboutCourse.meta.skills}
              previewImageLink={aboutCourse.previewImageLink}
            />
          ) : (
            <Lesson
              link={lessons.find(l => l.id === currentLessonId).link}
              order={lessons.find(l => l.id === currentLessonId).order}
              previewImageLink={lessons.find(l => l.id === currentLessonId).previewImageLink}
              title={lessons.find(l => l.id === currentLessonId).title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
