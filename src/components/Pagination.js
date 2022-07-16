import React from "react";

const Pagination = ({page, totalPages, onLeftClick, onRightClick}) => (
    <nav aria-label="navigation">
        <ul className="pagination">
            <li className="page-item">
                <a
                    className="page-link"
                    href="#"
                    onClick={onLeftClick}
                    aria-label="Previous"
                >
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item">
                <span className="page-link text-white">
                    {page} de {totalPages}
                </span>
            </li>
            <li className="page-item">
                <a
                    className="page-link"
                    href="#"
                    onClick={onRightClick}
                    aria-label="Next"
                >
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
);

export default Pagination;
