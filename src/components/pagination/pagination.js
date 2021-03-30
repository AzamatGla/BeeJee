import React from 'react';


const Pagination = ({changePage}) => {
    let firstPage = 1;
    let secondPage = 2;
    let thirdPage = 3;
    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-5">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                <li class="page-item"><a class="page-link" onClick={() => changePage(firstPage)} href="#">{firstPage}</a></li>
                <li class="page-item"><a class="page-link" onClick={() => changePage(secondPage)} href="#">{secondPage}</a></li>
                <li class="page-item"><a class="page-link" onClick={() => changePage(thirdPage)} href="#">{thirdPage}</a></li>
                <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;