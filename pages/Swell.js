import React from "react";
import { session, useSession } from "next-auth/client";
import CurrentSwell from "../components/CurrentSwell";

import SaveSwellBtn from "../components/SaveSwellBtn";
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
          <CurrentSwell />
          <SaveSwellBtn />
        </>
      )}
    </div>
  );
}

export default Swell;
