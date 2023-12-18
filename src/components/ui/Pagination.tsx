import React from "react";

export function Pagination() {
  return (
    <div className="join">
      <input
        checked
        aria-label="1"
        className="btn btn-square join-item"
        name="options"
        type="radio"
      />
      <input aria-label="2" className="btn btn-square join-item" name="options" type="radio" />
      <input aria-label="3" className="btn btn-square join-item" name="options" type="radio" />
      <input aria-label="4" className="btn btn-square join-item" name="options" type="radio" />
    </div>
  );
}
