import React from "react";
import { session, useSession } from "next-auth/client";
import GetSwellBtn from "../components/GetSwellBtn";
import SelectRegion from "../components/SelectRegion";
import SelectSubRegion1 from "../components/SelectSubRegion1";
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
          <SelectRegion /> <SelectSubRegion1 />
        </>
      )}
    </div>
  );
}

export default Swell;
