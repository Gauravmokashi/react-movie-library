import React from "react";

export const GenereList = (props) => {
  const { onItemSelect, currentGenere, genere } = props;
  let className = "list-group-item";
  return (
    <ul className="list-group list-group-lg col-">
      {/* <li
        className={
          currentGenere === "All Generes" ? className + " active" : className
        }
      >
        All Generes
      </li> */}

      {genere.map((g) => (
        <li
          key={g._id}
          className={
            g.name === currentGenere.name ? className + " active" : className
          }
        >
          <a className="page-link" onClick={() => onItemSelect(g)}>
            {g.name}
          </a>
        </li>
      ))}
    </ul>
  );
};