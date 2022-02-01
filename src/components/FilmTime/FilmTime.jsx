import React from "react";
import "./time.scss";
import FilmTimeHour from "./FilmTimeHour";

function FilmTime() {
    return (
        <div className="time">
            <ul>
                {FilmTimeHour.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>
                        {item.time}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilmTime;