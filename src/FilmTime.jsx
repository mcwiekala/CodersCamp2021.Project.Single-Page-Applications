import React from "react";
import "./time.scss";

function FilmTime() {
    return (
        <div className="time">
            <ul>
                <li className="time__detail">
                    <a href="/">
                        <time>12:00</time>
                    </a>
                </li>
                <li  className="time__detail">
                    <a href="/">
                        <time>12:00</time>
                    </a>
                </li>
                <li  className="time__detail">
                    <a href="/">
                        <time>12:00</time>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FilmTime;