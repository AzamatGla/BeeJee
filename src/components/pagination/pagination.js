import React from 'react';


const Pagination = ({changePage, firstPage, secondPage, thirdPage, nextPreviousPage}) => {
    const next = 1,
          previous = 0;
    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-5">
            <ul className="pagination">
                <li className="page-item"><a className="page-link btn" style={{color: "black"}} onClick={() => nextPreviousPage(previous)}>&laquo;</a></li>
                <li className="page-item"><a className="page-link btn" style={{color: "black"}} onClick={() => changePage(firstPage)}>{firstPage}</a></li>
                <li className="page-item"><a className="page-link btn" style={{color: "black"}} onClick={() => changePage(secondPage)}>{secondPage}</a></li>
                <li className="page-item"><a className="page-link btn" style={{color: "black"}} onClick={() => changePage(thirdPage)}>{thirdPage}</a></li>
                <li className="page-item"><a className="page-link btn" style={{color: "black"}} onClick={() => nextPreviousPage(next)}>&raquo;</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;