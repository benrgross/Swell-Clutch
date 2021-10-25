import React from "react";

import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import { useStoreContext } from "../utils/GlobalState";
import SavedSwellCard from "../components/SavedSwellCard";
import prisma from "../lib/prisma";

function SavedSwells(props) {
  const swells = props.swellArr[0];
  console.log(swells);
  const { data: session } = useSession();
  const [state, dispatch] = useStoreContext();
  return (
    <div className="savedCont">
      <div className="row">
        {swells.map(
          (swell) => (
            console.log(swell),
            (
              <SavedSwellCard
                key={swell.id}
                id={swell.id}
                dateStr={swell.dateStr}
                spotName={swell.spotName}
                createdAt={swell.dateStr}
                report={swell.report}
                swell1={swell.swell1}
                swell2={swell.swell2}
                swell3={swell.swell3}
                swell4={swell.swell4}
                swell5={swell.swell5}
                swell6={swell.swell6}
                tide={swell.tide}
                wind={swell.wind}
                notes={swell.notes}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const swells = await prisma.swell.findMany({
    where: {
      id: { equals: session.user.id, mode: "insensitive" },
    },
  });

  const swellObj = {
    swellArr: [],
  };

  swells.map((swell) => {
    swell.createdAt.toISOString(), swell.updatedAt.toISOString();
  });

  swellObj.swellArr.push(swells);

  return {
    props: swellObj,
  };
}

export default SavedSwells;
