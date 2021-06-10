import React from "react";
import { session, useSession } from "next-auth/client";
import GetSwellBtn from "../components/GetSwellBtn";
import SelectRegion from "../components/SelectRegion";
import SelectSubRegion1 from "../components/SelectSubRegion1";
import SelectSubRegion2 from "../components/SelectSubRegion2";
import { useStoreContext } from "../utils/GlobalState";
import Link from "next/link";

function Swell() {
  const [state, dispatch] = useStoreContext();
  const [session, loading] = useSession();

  return (
    <div>
      {!session ? (
        <div>
          <Link href="/">Please Sign In</Link>
        </div>
      ) : (
        <>
          {" "}
          <GetSwellBtn /> <br />
          <SelectRegion /> <SelectSubRegion1 /> <SelectSubRegion2 />
        </>
      )}
    </div>
  );
}

export default Swell;
