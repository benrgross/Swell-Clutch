import React from "react";
import { session, useSession } from "next-auth/client";
import CurrentSwell from "../components/CurrentSwell";
import SaveSwellBtn from "../components/SaveSwellBtn";
import Link from "next/link";

function Swell() {
  const [session, loading] = useSession();

  return (
    <div>
      {!session ? (
        <div>
          <Link href="/">Please Sign In</Link>
        </div>
      ) : (
        <div className="row">
          <CurrentSwell />
        </div>
      )}
    </div>
  );
}

export default Swell;
