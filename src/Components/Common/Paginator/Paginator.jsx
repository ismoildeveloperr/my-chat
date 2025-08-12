import React from "react";
import styles from './Paginator.module.css';

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => (
                <span
                    key={p}
                    className={currentPage === p ? styles.selectedPage : ""}
                    onClick={() => onPageChanged(p)}
                    style={{ cursor: "pointer", marginRight: "5px" }}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};


export default Paginator;
