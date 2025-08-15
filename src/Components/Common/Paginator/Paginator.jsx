import React, { useState } from "react";
import styles from "./Paginator.module.css";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>
            )}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => (
                    <span
                        key={p}
                        className={currentPage === p ? styles.selectedPage : ""}
                        onClick={() => onPageChanged(p)}
                        style={{
                            cursor: "pointer",
                            margin: "0 3px",
                            padding: "3px 6px",
                            border: currentPage === p ? "1px solid #000" : "1px solid #ccc",
                            borderRadius: "4px"
                        }}
                    >
                        {p}
                    </span>
                ))}

            {portionCount > portionNumber && (
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Далее</button>
            )}
        </div>
    );
};

export default Paginator;
