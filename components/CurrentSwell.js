import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function CurrentSwell() {
  const [state, dispatch] = useStoreContext();

  const {
    current_swell: [{ swell_current }, { tides_today }],
  } = state;

  console.log("state", swell_current, tides_today);

  return (
    <div>
      <p>wind: {swell_current.wind}</p>
      <p>primary swell: {swell_current.primarySwell}</p>
      <p>secondary swell: {swell_current.secondarySwell}</p>
      <p>am low tide: {tides_today.low.am_low}</p>
      <p>pm low tide: {tides_today.low.pm_low}</p>
      <p>am high tide: {tides_today.high.am_high}</p>
      <p>pm high tide: {tides_today.high.pm_high}</p>
    </div>
  );
}

export default CurrentSwell;
