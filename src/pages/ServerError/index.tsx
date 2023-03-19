import React from "react";
import { Link } from "react-router-dom";

import styles from "./ServerError.module.scss";

const ServerError: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>Server Error</h2>
          <p>Server has returned bad data</p>
          <Link className={styles.link} tabIndex={0} to={''} onClick={() => window.location.reload()}>
            Try one more
            <span></span>
          </Link>
        </div>
        <picture className={styles.picture}>
          <img
            src="https://img.freepik.com/premium-vector/flat-illustration-500-internal-server-error-concept-can-t-connect-to-server-or-internet_258153-329.jpg?w=2000"
            alt="[error 500]"
          />
        </picture>
      </div>
    </div>
  );
};

export default ServerError;
