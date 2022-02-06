import React from "react";
import "./film-showings.scss";
import FilmShowings from "./FilmShowings";
import GetCurrentDate from "./Date";

function FilmTime() {

    return (
        <div className="film-showings">
            <div className="film-showings__date"><GetCurrentDate/></div>
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