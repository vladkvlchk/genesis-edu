import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
//   return <p>not found</p>
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>Page not found</h2>
          <p>The page you’re looking for doesn’t exist</p>
          {/* <a tabIndex={0} href="/"> */}
          <Link className={styles.link} tabIndex={0} to={'/'}>
            Go to Main page
            <span></span>
          </Link>
          {/* </a> */}
        </div>
        <picture className={styles.picture}>
          <img
            className={styles.img}
            src="https://wisey.app/_next/static/chunks/9706722147af6c2ef98daa231c65c04e.svg"
          />
        </picture>
      </div>
    </div>
  );
};

export default NotFound;
