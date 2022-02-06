import React from "react";
import "./filmtime.scss";
import FilmShowings from "./FilmShowings";
import GetCurrentDate from "./Date";

function FilmTime() {

    return (
        <div className="filmshowings">
            <div className="filmshowings__date"><GetCurrentDate/></div>
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