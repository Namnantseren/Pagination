import { useState } from "react";
import "../style/main.css";
import "../style/number.css";
import { Link } from "react-router-dom";
import PageBtn from "./Pagebtn";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState();
  const pageNumbers = 100;
  return (
    <div className="topandbottom_border">
      {currentPage >= 2 && (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={"Өмнөх"} btnClass={"beforeBtn"} />
        </Link>
      )}
      {currentPage > 5 && <span>...</span>}
      <Link
        to={`/page/${currentPage - 3}`}
        onClick={() => setCurrentPage(currentPage - 3)}
      >
        <PageBtn btnName={currentPage - 3} btnClass={"pageBtn"} />
      </Link>

      <Link
        to={`/page/${pageNumbers}}`}
        onClick={() => setCurrentPage(pageNumbers)}
      >
        <PageBtn btnName={`${pageNumbers}`} btnClass={"pageBtn"} />
      </Link>

      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageBtn btnName={"дараах"} btnClass={"nextBtn"} />
      </Link>
    </div>
  );
}
