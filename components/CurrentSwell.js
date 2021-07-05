import React, { useEffect } from "react";
import { TIDE } from "../utils/Actions";
import { useStoreContext } from "../utils/GlobalState";

function CurrentSwell() {
  const [state, dispatch] = useStoreContext();

  const { swell_current } = state.swell;

  const { tides } = state;

  useEffect(() => {
    if (swell_current.wind === "") {
      dispatch({
        type: TIDE,
        tide: "select a surf spot",
      });
    } else {
      // setting time to compare to tide chart
      let date = new Date();
      let options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      let timeString = date.toLocaleString("en-US");
      console.log(timeString);

      // add algo to get current tide trend, add dispatch and set in state
    }
  }, [swell_current]);

  console.log("state", swell_current, tides);

  return (
    <div>
      <p>wind: {swell_current.wind}</p>
      <p>primary swell: {swell_current.primarySwell}</p>
      <p>secondary swell: {swell_current.secondarySwell}</p>
      <p>
        am low tide: {tides.low.am_low_time} @ {tides.low.am_low_ft}ft
      </p>
      <p>
        pm low tide: {tides.low.pm_low_time} @ {tides.low.pm_low_ft}ft{" "}
      </p>
      <p>
        am high tide: {tides.high.am_high_time} @ {tides.high.am_high_ft}ft
      </p>
      <p>
        am high tide: {tides.high.pm_high_time} @ {tides.high.pm_high_ft}ft
      </p>
    </div>
  );
}

export default CurrentSwell;
