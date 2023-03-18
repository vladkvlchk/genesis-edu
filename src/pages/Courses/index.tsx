import React from "react";
import axios from "../../axios";

import styles from "./Courses.module.scss";
import CourseItem from "../../components/CourseItem";
import Pagination from "../../components/Pagination";
import { CourseType } from "./types";
import Loader from "../../components/Loader";

const Courses: React.FC = () => {
  const [courses, setCourses] = React.useState<CourseType[] | []>([]);
  const [currentPage, setCurrentPage] = React.useState<Number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const getCourses = async () => {
    const { data } = await axios.get("core/preview-courses");
    setCourses(data.courses);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getCourses();
  }, []);
  return (
    <section className={styles.coursesPage}>
      <div className={styles.container}>
        <h2>Courses</h2>
        <div className={styles.courses}>
          {isLoading ? (
            <Loader />
          ) : (
            courses
              .slice(12 * +currentPage, 12 * (+currentPage + 1))
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
                    description={course.description}
                  />
                );
              })
          )}
        </div>
        <Pagination
          onChange={(page: number) => setCurrentPage(page)}
          countOfPages={Math.ceil(courses.length / 10)}
        />
      </div>
    </section>
  );
};

export default Courses;
