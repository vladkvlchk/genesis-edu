import React from "react";
import axios from "../../axios";

import styles from "./Courses.module.scss";
import CourseItem from "../../components/CourseItem";
import Pagination from "../../components/Pagination";
import { CourseType } from "./types";
import Loader from "../../components/Loader";
import ServerError from "../ServerError";

const Courses: React.FC = () => {
  const [courses, setCourses] = React.useState<CourseType[] | []>([]);
  const [currentPage, setCurrentPage] = React.useState<Number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [serverError, setServerError] = React.useState<any>();

  const getCourses = async () => {
    try {
      const { data } = await axios.get("core/preview-courses");
      if (!data.courses[0]) throw new Error('no data')
      setCourses(data.courses);
      setIsLoading(false);
    } catch (e) {
      setServerError(e);
    }
  };

  React.useEffect(() => {
    getCourses();
  }, []);
  return (
    <section className={styles.coursesPage}>
      {serverError ? (
        <ServerError />
      ) : (
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
                      videoPreviewUrl={course?.meta?.courseVideoPreview?.link}
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
      )}
    </section>
  );
};

export default Courses;
