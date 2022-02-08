import React from "react";
import "./film-showings.scss";
import filmShowingsData from "../../tools/showings/filmShowingsData";

function FilmTime() {
  const filmsByDayMap = filmShowingsData.reduce((acc, value) => {
    if (!acc[value.date.toDateString()]) {
      acc[value.date.toDateString()] = [];
    }

    acc[value.date.toDateString()].push(value);

    return acc;
  }, {});

  return (
    <div className="film-showings">
      {Object.entries(filmsByDayMap).map(([showingDate, showingList]) => (
        <div>
          <div className="film-showings__date">{showingDate}</div>
          <ul>
            {showingList.map((showing) => (
              <li key={showing.id}>
                <a href="/#">{showing.date.toLocaleTimeString()}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      ;
    </div>
  );
}

export default FilmTime;
