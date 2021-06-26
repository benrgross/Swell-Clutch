import React from "react";
import { server } from "../config";
import { useStoreContext } from "../utils/GlobalState";
import { REGION3, CURRENT_SWELL } from "../utils/Actions";
import axios from "axios";

function SelectSubregion2() {
  const [state, dispatch] = useStoreContext();

  const selectSubRegion2 = async (e) => {
    dispatch({
      type: REGION3,
      region: e.target.value,
    });

    const forcast = {
      location: e.target.value,
    };

    const { data } = await axios.post(`${server}/api/swellInfo`, forcast);

    dispatch({
      type: CURRENT_SWELL,
      currentSwell: data,
    });
  };

  switch (state.region2) {
    case "select":
      return (
        <div>
          <select
            value={state.region3}
            onChange={(e) => selectSubRegion1(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Select Sub Region:</option>
          </select>
        </div>
      );
    case "North-East":
      return (
        <div>
          <select
            value={state.region3}
            onChange={(e) => selectSubRegion2(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Select Sub Region:</option>
            <optgroup label="Norther New England">
              <option value="cape-elizabeth-maine">Cape Elizabeth</option>
              <option value="kennebunk-maine">Kennebunk</option>
              <option value="hampton-new-hampshire">Hampton</option>
              <option value="gloucester-massachusetts">Gloucester</option>
              <option value="natasket-massachusetts">Natasket</option>
            </optgroup>
            <optgroup label="Southern New England">
              <option value="cape-cod-massachusetts">Cape Cod</option>
              <option value="natucket-massachusetts">Nantucket</option>
              <option value="marthas-vineyard-massachusetts">
                Martha's Vineyard
              </option>
              <option value="newport-rhode-island">Rhode Island</option>
              <option value="block-island-rhode-island">Block Island</option>
            </optgroup>
            <optgroup label="New York">
              <option value="montauk-new-york">Montauk</option>
              <option value="south-hampton-new-york">South Hampton</option>
              <option value="fire-island-new-york">Fire Island</option>
              <option value="long-beach-new-york">Long Beach</option>
              <option value="rockaway-new-york">Rockaway</option>
            </optgroup>
          </select>
        </div>
      );
    case "Southern-California":
      return (
        <div>
          <select
            value={state.region3}
            onChange={(e) => selectSubRegion2(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option value="select" selected>
              Select Sub Region:
            </option>
            <optgroup label="SoCal">
              <option value="santa-barbara-california">Santa Barbara</option>
              <option value="ventura-california">Ventura California</option>
              <option value="los-angeles-california-north">North LA</option>
              <option value="los-angeles-california-south">South LA</option>
              <option value="orange-county-california-north">
                North Orange County
              </option>
              <option value="san-diego-california-north">
                North San Diego
              </option>
              <option value="san-diego-california-north">
                South San Diego
              </option>
            </optgroup>
          </select>
        </div>
      );
    default:
      return (
        <div>
          <select
            value={state.region3}
            onChange={(e) => selectSubRegion1(e)}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option value="select" selected>
              Select Sub Region:
            </option>
          </select>
        </div>
      );
  }
}

export default SelectSubregion2;
