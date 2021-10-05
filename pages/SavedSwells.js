import React from "react";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";

import { useStoreContext } from "../utils/GlobalState";

import prisma from "../lib/prisma";

function SavedSwells(props) {
  console.log(props);
  const { data: session } = useSession();
  const [state, dispatch] = useStoreContext();
  return <div>{props.swells}</div>;
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
    swell.createdAt.toString(), swell.updatedAt.toString();
  });
  swellObj.swellArr.push(swells);

  return {
    props: swellObj,
  };
}

export default SavedSwells;
