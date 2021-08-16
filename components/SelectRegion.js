import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { REGION } from "../utils/Actions";

function SelectRegion() {
  const [state, dispatch] = useStoreContext();

  const selectRegion = (e) => {
    console.log(e.target.value);
    dispatch({
      type: REGION,
      region: e.target.value,
    });
  };

  return (
    <div>
      <select
        value={state.region}
        onChange={(e) => selectRegion(e)}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option value="select" selected>
          Select Region:
        </option>
        <option value="USA">USA</option>
        {/* <option value="Mexico">Mexico</option>
        <option value="Central America">Central America</option>
        <option value="Caribbean">Caribbean</option> */}
      </select>
    </div>
  );
}

export default SelectRegion;
