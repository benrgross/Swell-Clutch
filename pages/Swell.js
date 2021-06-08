import React from "react";
import GetSwellBtn from "../components/GetSwellBtn";
import { useStoreContext } from "../utils/GlobalState";

function Swell() {
  const [state, dispatch] = useStoreContext();
  return (
    <div>
      <GetSwellBtn />
    </div>
  );
}

export default Swell;
