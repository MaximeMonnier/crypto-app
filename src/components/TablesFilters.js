import React from "react";

const TablesFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked={true} />
          <label htmlFor="stableCoin">Avec stable coin</label>
        </div>
        <div className="no-list-btn">
          <p>Aucun liste</p>
        </div>
        <div className="fav-list">
          <p>liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default TablesFilters;
