import React from "react";
import { userStoreContext, useStoreContext } from "../utils/GlobalState";

function SelectSubRegion1() {
  const [state, dispatch] = useStoreContext();

  switch (state.region) {
    case "USA":
      return (
        <div>
          <select
            value={state.subRegion1}
            onChange={(e) => selectRegion(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Select Sub Region:</option>
            <option value="North-East">North East</option>
            <option value="Mid-Atlantic">Mid Atlantic</option>
            <option value="California-North">Northern California</option>
            <option value="Southern-California">Southern California</option>
          </select>
        </div>
      );
    case "Mexico":
      return (
        <div>
          <select
            value={state.subRegion1}
            onChange={(e) => selectRegion(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Select Sub Region:</option>
            <option value="Main-Land-Mexico">Main Land Mexico</option>
            <option value="Baja-Mexico">Baja Mexico</option>
            <option value="Gulf-Of-Mexico">Gulf Of Mexico</option>
          </select>
        </div>
      );
    case "Central America":
      return (
        <div>
          <select
            value={state.subRegion1}
            onChange={(e) => selectRegion(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Select Sub Region:</option>
            <option value="Central-America">Central America</option>
          </select>
        </div>
      );
    case "Caribbean":
      return (
        <div>
          <select
            value={state.subRegion1}
            onChange={(e) => selectRegion(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Select Sub Region:</option>
            <option value="North-West-Caribbean">North West Caribbean</option>
            <option value="Greater-Antilles">Greater Antilles</option>
            <option value="Leeward-Islands">Leeward Islands</option>
          </select>
        </div>
      );
  }
}

export default SelectSubRegion1;
