import { useState } from "react";
import "../style/main.css";
import "../style/number.css";
import { Link } from "react-router-dom";
import PageBtn from "./Pagebtn";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 100;
  const firstPage = 1;
  
  return (
    <div className="topandbottom_border">
      {currentPage > 0 && currentPage <= lastPage && (
        <>
          {currentPage > 2 && (
            <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={"Өмнөх"} btnClass={"beforeBtn"} />
          </Link>
          )}
          {currentPage > 3 && (
            <Link to={`/page/${firstPage}`} onClick={() => setCurrentPage(firstPage)}>
              <PageBtn btnName={1} btnClass={"InactiveBtn"}/>
            </Link>
          )}
          {currentPage > 5 && <span>...</span>}

          {currentPage > 3 && (
            <Link
              to={`/page/${currentPage - 3}`}
              onClick={() => setCurrentPage(currentPage - 3)}
            >
              <PageBtn
                btnName={`${currentPage - 3}`}
                btnClass={"InActiveBtn"}
              />
            </Link>
          )}

          {currentPage > 2 && (
            <Link
              to={`/page/${currentPage - 2}`}
              onClick={() => setCurrentPage(currentPage - 2)}
            >
              <PageBtn
                btnName={`${currentPage - 2}`}
                btnClass={"InActiveBtn"}
              />
            </Link>
          )}

          {currentPage > 1 && (
            <Link
              to={`/page/${currentPage - 1}`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <PageBtn
                btnName={`${currentPage - 1}`}
                btnClass={"InActiveBtn"}
              />
            </Link>
          )}

          <Link
            to={`/page/${currentPage}`}
            onClick={() => setCurrentPage(currentPage)}
          >
            <PageBtn btnName={`${currentPage}`} btnClass={"ActiveBtn"} />
          </Link>

          {currentPage < 98 && (
            <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={`${currentPage + 1}`} btnClass={"InActiveBtn"} />
          </Link>
          )}
          {currentPage < 97 && (
            <Link
            to={`/page/${currentPage + 2}`}
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            <PageBtn btnName={`${currentPage + 2}`} btnClass={"InActiveBtn"} />
          </Link>
          )}
          {currentPage < 96 && (
            <Link
            to={`/page/${currentPage + 3}`}
            onClick={() => setCurrentPage(currentPage + 3)}
          >
            <PageBtn btnName={`${currentPage + 3}`} btnClass={"InActiveBtn"} />
          </Link>
          )}
          {currentPage < 97 && <span>...</span>}
          {currentPage < 100 && (
            <Link
            to={`/page/${lastPage}`}
            onClick={() => setCurrentPage(lastPage)}
          >
            <PageBtn btnName={`${lastPage}`} btnClass={"InActiveBtn"} />
          </Link>
          )}

          {currentPage < 100 && (
            <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={"дараах"} btnClass={"nextBtn"} />
          </Link>
          )}
        </>
      )}
    </div>
  );
}
