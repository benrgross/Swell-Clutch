import React, { useEffect } from "react";
import { TIDE } from "../utils/Actions";
import { useStoreContext } from "../utils/GlobalState";

function CurrentSwell() {
  const [state, dispatch] = useStoreContext();

  const {
    swell: [{ swell_current }, { tides_today }],
  } = state;

  useEffect(() => {
    if (swell_current.wind === "") {
      dispatch({
        type: TIDE,
        tide: "select a surf spot",
      });
    } else {
      let date = new Date("February 04, 2011 19:00:00");
      let options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      let timeString = date.toLocaleString("en-US", options);
      console.log(timeString);
    }
  }, [swell_current]);

  console.log("state", swell_current, tides_today);

  return (
    <div>
      <p>wind: {swell_current.wind}</p>
      <p>primary swell: {swell_current.primarySwell}</p>
      <p>secondary swell: {swell_current.secondarySwell}</p>
      <p>am low tide: {tides_today.low.am_low}</p>
      <p>pm low tide: {tides_today.low.pm_low}</p>
      <p>
        am high tide: {tides_today.high.am_high_time} @{" "}
        {tides_today.high.am_high_ft}ft
      </p>
      <p>pm high tide: {tides_today.high.pm_high}</p>
    </div>
  );
}

export default CurrentSwell;
