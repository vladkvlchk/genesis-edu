import React from "react";
import axios from "../../axios";

import styles from "./Courses.module.scss";
import CourseItem from "../../components/CourseItem";
import Pagination from "../../components/Pagination";
import { CourseType } from "./types";


const Courses: React.FC = () => {
  const [courses, setCourses] = React.useState<CourseType[] | []>([]);
  const [currentPage, setCurrentPage] = React.useState<Number>(0);

  const getCourses = async () => {
    const { data } = await axios.get("core/preview-courses");
    setCourses(data.courses);
  };

  React.useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.courses}>
        {courses[0] &&
          courses
            .slice(10 * +currentPage, 10 + 10 * +currentPage)
            ?.map((course: CourseType) => {
              return (
                <CourseItem
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  previewImageLink={course.previewImageLink}
                  lessonsCount={course.lessonsCount}
                  rating={course.rating}
                  skills={course.meta.skills}
                />
              );
            })}
      </div>
      <Pagination
        onChange={(page: number) => setCurrentPage(page)}
        countOfPages={Math.ceil(courses.length / 10)}
      />
    </div>
  );
};

export default Courses;