import React from "react";
import "./filmtime.scss";
import FilmShowings from "./FilmShowings";

function FilmTime() {
    return (
        <div className="filmshowings">
            <ul>
                {FilmShowings.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>
                        {item.hour}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilmTime;