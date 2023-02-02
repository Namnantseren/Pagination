import { useState } from "react";
import "../style/main.css";
import "../style/number.css";
import { Link } from "react-router-dom";

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState()
  return (
    <div className="topandbottom_border">
      <div className="pagination-width">
        <div className="flex justify-center">
            <Link to={`/page/${currentPage}`} onClick={() => setCurrentPage(currentPage - 1)}>
                <div className="pagination_container">
                    <button className="pagination_numbers">1</button>
                </div>
            </Link>
            <Link to={`/page/${currentPage}`} onClick={() => setCurrentPage(currentPage + 1)}>
                <button className="firstAndLast">Дараах</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
