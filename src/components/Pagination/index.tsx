import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

interface PaginationType {
  onChange: any;
  countOfPages: number;
}

const Pagination: React.FC<PaginationType> = ({ onChange, countOfPages }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChange(event.selected)}
      pageRangeDisplayed={10}
      pageCount={countOfPages}
      previousLabel="<"
    />
  );
};

export default Pagination;
