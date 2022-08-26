import React from "react";

export const Options = ({ options, handleOption }) => {
  console.log(options);
  return (
    <div className="options">
      <div className="options__item">
        <span className="options__item-text">Adult</span>
        <div className="options__item-counter">
          <button
            disabled={options.adult <= 1}
            className="button__options"
            onClick={() => handleOption("adult", "d")}
          >
            -
          </button>
          <span className="options__item-counter-number">{options.adult}</span>
          <button
            className="button__options"
            onClick={() => handleOption("adult", "i")}
          >
            +
          </button>
        </div>
      </div>
      <div className="options__item">
        <span className="options__item-text">Children</span>
        <div className="options__item-counter">
          <button
            disabled={options.children <= 0}
            className="button__options"
            onClick={() => handleOption("children", "d")}
          >
            -
          </button>
          <span className="options__item-counter-number">
            {options.children}
          </span>
          <button
            className="button__options"
            onClick={() => handleOption("children", "i")}
          >
            +
          </button>
        </div>
      </div>
      <div className="options__item">
        <span className="options__item-text">Room</span>
        <div className="options__item-counter">
          <button
            disabled={options.room <= 1}
            className="button__options"
            onClick={() => handleOption("room", "d")}
          >
            -
          </button>
          <span className="options__item-counter-number">{options.room}</span>
          <button
            className="button__options"
            onClick={() => handleOption("room", "i")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
